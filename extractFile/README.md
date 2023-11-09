Write a function that receives a single string - the path to a file (the '\' character is escaped)
Your task is to subtract the file name and its extension. (Beware of files like template.bak.pptx, as template.bak
should be the file name, while pptx is the extension).

Sample input:

    'C:\\Internal\\training-internal\\Template.pptx' F

Sample output:

    File name: Template
    File extension: pptx

Sample input:

    'C:\\Projects\\Data-Structures\\LinkedList.cs' 

Sample output:

    File name: LinkedList
    File extension: cs
