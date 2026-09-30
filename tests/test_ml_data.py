import os
import tempfile

from app.ml.data.preparation import (
    check_missing_or_corrupt_files,
    dataset_statistics,
    map_classes,
    validate_dataset_structure,
)
from app.ml.data.registry import DatasetRegistryEntry, get_dataset_info


def test_registry():
    rdd = get_dataset_info("RDD2022")
    assert rdd is not None
    assert isinstance(rdd, DatasetRegistryEntry)
    assert rdd.name == "RDD2022"


def test_dataset_validation():
    with tempfile.TemporaryDirectory() as temp_dir:
        # Empty dir
        assert not validate_dataset_structure(temp_dir)

        # Create structure
        os.makedirs(os.path.join(temp_dir, "images"))
        os.makedirs(os.path.join(temp_dir, "labels"))

        assert validate_dataset_structure(temp_dir)

        # Add files
        open(os.path.join(temp_dir, "images", "img1.jpg"), "w").close()
        open(os.path.join(temp_dir, "labels", "img1.txt"), "w").close()
        open(os.path.join(temp_dir, "images", "img2.jpg"), "w").close()

        stats = dataset_statistics(temp_dir)
        assert stats["images"] == 2
        assert stats["labels"] == 1

        issues = check_missing_or_corrupt_files(temp_dir)
        assert len(issues) == 1
        assert "img2" in issues[0]


def test_map_classes():
    original_label = "0 0.5 0.5 0.2 0.2\n1 0.4 0.4 0.1 0.1"
    class_map = {0: 3, 1: 4}
    new_label = map_classes(original_label, class_map)

    assert new_label == "3 0.5 0.5 0.2 0.2\n4 0.4 0.4 0.1 0.1"
