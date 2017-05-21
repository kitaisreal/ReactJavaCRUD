<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <spring:url value="/generated/app-bundle.js" var="crunchifyJS" />
</head>
<body>

<div id="app"></div>
<script src="${crunchifyJS}"></script>
</body>
</html>