import logging

log = logging.getLogger("app.log")
log.setLevel(logging.DEBUG)

file_handler = logging.FileHandler("app.log")
formatter = logging.Formatter('%(asctime)s - %(levelname)s - %(message)s')
file_handler.setFormatter(formatter)
log.addHandler(file_handler)


# def log(message: str, level: str = "info"):
#     if level == "info":
#         log.info(message)
#     elif level == "error":
#         log.error(message)
#     elif level == "warning":
#         log.warning(message)
