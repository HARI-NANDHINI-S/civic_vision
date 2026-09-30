import os
import shutil
from typing import List, Dict, Tuple
import json

def validate_dataset_structure(dataset_path: str) -> bool:
    """Check if the dataset contains images and labels directories."""
    images_dir = os.path.join(dataset_path, "images")
    labels_dir = os.path.join(dataset_path, "labels")
    return os.path.exists(images_dir) and os.path.exists(labels_dir)

def check_missing_or_corrupt_files(dataset_path: str) -> List[str]:
    """Identify missing labels for images or missing images for labels."""
    issues = []
    if not validate_dataset_structure(dataset_path):
        issues.append("Invalid structure: missing images/ or labels/ directories.")
        return issues
        
    images = set(os.path.splitext(f)[0] for f in os.listdir(os.path.join(dataset_path, "images")))
    labels = set(os.path.splitext(f)[0] for f in os.listdir(os.path.join(dataset_path, "labels")))
    
    missing_labels = images - labels
    missing_images = labels - images
    
    for ml in missing_labels:
        issues.append(f"Missing label for image: {ml}")
    for mi in missing_images:
        issues.append(f"Missing image for label: {mi}")
        
    return issues

def dataset_statistics(dataset_path: str) -> Dict[str, int]:
    """Returns basic stats like number of images and labels."""
    if not validate_dataset_structure(dataset_path):
        return {"images": 0, "labels": 0}
        
    images_count = len(os.listdir(os.path.join(dataset_path, "images")))
    labels_count = len(os.listdir(os.path.join(dataset_path, "labels")))
    return {"images": images_count, "labels": labels_count}

def map_classes(label_content: str, class_map: Dict[int, int]) -> str:
    """Map YOLO class IDs to new IDs."""
    new_lines = []
    for line in label_content.strip().split('\n'):
        if not line: continue
        parts = line.split()
        class_id = int(parts[0])
        new_class_id = class_map.get(class_id, class_id)
        new_line = f"{new_class_id} " + " ".join(parts[1:])
        new_lines.append(new_line)
    return "\n".join(new_lines)
