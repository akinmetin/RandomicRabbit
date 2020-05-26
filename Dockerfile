FROM python:3.8

ENV PYTHONUNBUFFERED=1

COPY ./requirements.txt /src/requirements.txt
COPY ./backend /src

WORKDIR /src
RUN pip install --no-cache-dir -r requirements.txt
CMD [ "python", "./app.py" ]