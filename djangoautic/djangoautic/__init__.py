# MVT Model View Template Architecture 
  # django follows MVT Architecture

#  EXPLAIN DJANGO PROJECT DIRECTORY STRUCTURE
   # django project diorectory contains basic files by default such as manage.py 
   # init.py, seeting.py, urls.py and wsgi.py

#manage.py
    # This file is used to interact with your project via the command line such as
    #start the sesrver, synchronuos the database etc

#init.py
    # it is a python package it is invoke when the pakage or a module 
    #in the packages is imported. we usually use this file to execute package initialisation code.

#settings.py
    # it contains the all the websites seettings. in this file we registre any applications we create,
    #the location of our static file , database configuration details etc.

#urls.py
    # in this file we store all linga of the project and functions to call

#asgi.py  ASYNCHRONOUS SERVER GATEWAY INTERfACE 
    # This file enables asgi compatable webservers to serve your project 

#wsgi.py  WEB SERVER GATEWAY INTERFACE
    # This file enables wsgi compatable webservers to server your project

