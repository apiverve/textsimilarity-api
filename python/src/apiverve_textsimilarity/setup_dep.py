from setuptools import setup, find_packages

setup(
    name='apiverve_textsimilarity',
    version='1.2.3',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Text Similarity compares two text strings and calculates their percentage match score. It returns case-insensitive and case-sensitive similarity scores plus the count and proportion of differing words.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/textsimilarity?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
