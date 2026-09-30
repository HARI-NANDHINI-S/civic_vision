import cv2
import numpy as np
import os
from typing import Dict, Any, Tuple
from pydantic import BaseModel

class PreprocessingMetadata(BaseModel):
    original_width: int
    original_height: int
    processed_width: int
    processed_height: int
    file_type: str
    preprocessing_version: str

MAX_IMAGE_SIZE = (4096, 4096)
TARGET_SIZE = (640, 640)
ALLOWED_FORMATS = {'.jpg', '.jpeg', '.png'}
PREPROCESSING_VERSION = "1.0.0"

def validate_image(file_path: str) -> bool:
    """Validate image format and check if it's readable."""
    ext = os.path.splitext(file_path)[1].lower()
    if ext not in ALLOWED_FORMATS:
        raise ValueError(f"Invalid format {ext}. Allowed formats: {ALLOWED_FORMATS}")
    
    # Check if we can read it
    img = cv2.imread(file_path)
    if img is None:
        raise ValueError(f"Could not read image at {file_path}")
        
    h, w = img.shape[:2]
    if w > MAX_IMAGE_SIZE[0] or h > MAX_IMAGE_SIZE[1]:
        raise ValueError(f"Image too large: {w}x{h}. Max allowed: {MAX_IMAGE_SIZE}")
        
    return True

def letterbox_image(image: np.ndarray, target_size: Tuple[int, int] = TARGET_SIZE) -> np.ndarray:
    """Resize image with unchanged aspect ratio using padding (letterboxing)."""
    shape = image.shape[:2]  # current shape [height, width]
    
    r = min(target_size[0] / shape[1], target_size[1] / shape[0])
    
    new_unpad = int(round(shape[1] * r)), int(round(shape[0] * r))
    dw, dh = target_size[0] - new_unpad[0], target_size[1] - new_unpad[1]  # wh padding
    
    dw /= 2  # divide padding into 2 sides
    dh /= 2
    
    if shape[::-1] != new_unpad:  # resize
        image = cv2.resize(image, new_unpad, interpolation=cv2.INTER_LINEAR)
        
    top, bottom = int(round(dh - 0.1)), int(round(dh + 0.1))
    left, right = int(round(dw - 0.1)), int(round(dw + 0.1))
    
    # Add border
    image = cv2.copyMakeBorder(image, top, bottom, left, right, cv2.BORDER_CONSTANT, value=(114, 114, 114))
    return image

def preprocess_image(file_path: str) -> Tuple[np.ndarray, PreprocessingMetadata]:
    """
    Load, validate, and preprocess an image for YOLO detection.
    """
    validate_image(file_path)
    
    # Read image (BGR by default in cv2)
    img = cv2.imread(file_path)
    h, w = img.shape[:2]
    ext = os.path.splitext(file_path)[1].lower()[1:]
    
    # YOLO models usually expect RGB
    img_rgb = cv2.cvtColor(img, cv2.COLOR_BGR2RGB)
    
    # Resize with letterboxing
    processed_img = letterbox_image(img_rgb, TARGET_SIZE)
    ph, pw = processed_img.shape[:2]
    
    metadata = PreprocessingMetadata(
        original_width=w,
        original_height=h,
        processed_width=pw,
        processed_height=ph,
        file_type=ext,
        preprocessing_version=PREPROCESSING_VERSION
    )
    
    return processed_img, metadata
