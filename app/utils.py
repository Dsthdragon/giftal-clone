import os
from PIL import Image
from io import BytesIO
# import boto3
# from botocore.exceptions import NoCredentialsError
from flask import request

from config import Config

import base64

# aws_client = boto3.client(
#     's3', aws_access_key_id=Config.AWS_ACCESS_KEY,
#     aws_secret_access_key=Config.AWS_SECRET_KEY
# )
# aws_s3 = boto3.resource(
#     's3', aws_access_key_id=Config.AWS_ACCESS_KEY,
#     aws_secret_access_key=Config.AWS_SECRET_KEY
# )


def resize_image(img, path, size, crop, thumb, filename):
    new_height, new_width = size
    width, height = img.size

    height_ratio = height / new_height
    width_ratio = width / new_width

    optimal_ratio = width_ratio
    if height_ratio < width_ratio:
        optimal_ratio = height_ratio

    optimal_size = (int(width / optimal_ratio), int(height / optimal_ratio))
    img = img.resize(optimal_size)

    if crop:
        width, height = img.size

        left = (width - new_width) / 2
        top = (height - new_height) / 2
        right = (width + new_width) / 2
        bottom = (height + new_height) / 2

        img = img.crop((left, top, right, bottom))
    if Config.LOCAL_STORAGE == 1:
        img.save(path)
    else:
        filename = "thumb-{}".format(filename) if thumb else filename
        aws_upload(img, filename)


def save_image(filename, image64, upload_folder, upload_size, crop=False, thumb=False):
    path = os.path.join(upload_folder, filename)
    img = Image.open(BytesIO(base64.b64decode(image64)))

    resize_image(img, path, upload_size, crop, thumb, filename)


def aws_upload(img, filename):
    try:
        # object = aws_s3.Object(Config.AWS_BUCKET, filename)
        # object.put()
        img.save(filename)
        # aws_client.upload_file(
        #     Filename=filename,
        #     Bucket=Config.AWS_BUCKET,
        #     Key=filename,
        #     ExtraArgs={'ACL': 'public-read'}
        # )

        os.remove(filename)
        print("Upload Successful")
        return True
    except FileNotFoundError:
        print("The file was not found")
        return False
    # except NoCredentialsError:
    #     print("Credentials not available")
    #     return False


def display_image(filename, path, thumb=False):
    if Config.LOCAL_STORAGE == 1:
        return "{}{}".format(path, filename)
    else:
        filename = "thumb-{}".format(filename) if thumb else filename
        return "{}{}".format(Config.AWS_BUCKET_LINK, filename)


def delete_file(img, path, thumb=False):
    if Config.LOCAL_STORAGE == 1:
        old = os.path.join(path, img)
        if os.path.exists(old):
            os.remove(old)
    else:
        filename = "thumb-{}".format(img) if thumb else img
        # aws_client.delete_object(Bucket=Config.AWS_BUCKET, Key=filename)
