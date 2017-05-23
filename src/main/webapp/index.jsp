<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <spring:url value="/generated/app-bundle.js" var="reactJS" />
    <spring:url value="/css/main.css" var ="modalStyle"/>
    <link rel="stylesheet" type="text/css" href="/css/main.css">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
</head>
<body>

<div id="app"></div>
<script src="${reactJS}"></script>

<form method="POST" action="uploadImage" enctype="multipart/form-data">
    File to upload: <input type="file" name="file"><br />

    <input type="submit" value="Upload">
    Press here to upload the file!
</form>
<image src="images/Bobby.jpg"/>
</body>
</html>