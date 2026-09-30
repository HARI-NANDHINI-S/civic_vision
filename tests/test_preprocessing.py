import os
import tempfile
import cv2
import numpy as np
import pytest
from app.ml.detection.preprocessing import (
    validate_image,
    preprocess_image,
    letterbox_image,
    TARGET_SIZE,
    PreprocessingMetadata
)

def create_dummy_image(path: str, size: tuple = (800, 600)):
    """Create a dummy image for testing."""
    img = np.zeros((size[1], size[0], 3), dtype=np.uint8)
    img[:] = (255, 0, 0) # Blue image in BGR
    cv2.imwrite(path, img)

def test_validate_image_valid():
    with tempfile.TemporaryDirectory() as temp_dir:
        img_path = os.path.join(temp_dir, "test.jpg")
        create_dummy_image(img_path)
        assert validate_image(img_path) == True

def test_validate_image_invalid_format():
    with pytest.raises(ValueError, match="Invalid format"):
        validate_image("test.gif")

def test_validate_image_too_large():
    with tempfile.TemporaryDirectory() as temp_dir:
        img_path = os.path.join(temp_dir, "large.jpg")
        create_dummy_image(img_path, size=(5000, 5000))
        with pytest.raises(ValueError, match="Image too large"):
            validate_image(img_path)

def test_preprocess_image():
    with tempfile.TemporaryDirectory() as temp_dir:
        img_path = os.path.join(temp_dir, "test.jpg")
        # create 800x600 image
        create_dummy_image(img_path, size=(800, 600))
        
        processed_img, metadata = preprocess_image(img_path)
        
        # Check shape
        assert processed_img.shape == (TARGET_SIZE[1], TARGET_SIZE[0], 3)
        
        # Check metadata
        assert isinstance(metadata, PreprocessingMetadata)
        assert metadata.original_width == 800
        assert metadata.original_height == 600
        assert metadata.processed_width == TARGET_SIZE[0]
        assert metadata.processed_height == TARGET_SIZE[1]
        assert metadata.file_type == "jpg"
        assert metadata.preprocessing_version == "1.0.0"
