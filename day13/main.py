import pywhatkit

try:
    pywhatkit.sendwhatmsg("+2348104181028", "Hello World")
    print("Sucessfully Sent")
except:
    print("error")