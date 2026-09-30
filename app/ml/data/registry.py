
from pydantic import BaseModel


class DatasetRegistryEntry(BaseModel):
    name: str
    source: str
    license_terms: str
    classes: list[str]
    annotation_format: str
    intended_use: str
    conversion_status: str


# Registry of approved datasets
REGISTERED_DATASETS = [
    DatasetRegistryEntry(
        name="RDD2022",
        source="Crowdsensing based Road Damage Detection Challenge",
        license_terms="Publicly available for research",
        classes=[
            "Longitudinal Crack",
            "Transverse Crack",
            "Alligator Crack",
            "Pothole",
        ],
        annotation_format="YOLO/VOC",
        intended_use="Road damage detection",
        conversion_status="pending",
    ),
    DatasetRegistryEntry(
        name="TACO",
        source="Trash Annotations in Context",
        license_terms="MIT",
        classes=["Litter", "Waste"],
        annotation_format="COCO",
        intended_use="Street litter detection",
        conversion_status="pending",
    ),
]


def get_dataset_info(name: str) -> DatasetRegistryEntry | None:
    for ds in REGISTERED_DATASETS:
        if ds.name == name:
            return ds
    return None
