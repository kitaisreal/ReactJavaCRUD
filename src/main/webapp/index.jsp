<%@ taglib prefix="spring" uri="http://www.springframework.org/tags"%>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<html>
<head>
    <title>Title</title>
    <spring:url value="/generated/app-bundle.js" var="reactJS" />
    <spring:url value="/css/main.css" var ="modalStyle"/>
    <link rel="stylesheet" type="text/css" href="/css/main.css">
</head>
<body>

<div id="app"></div>
<script src="${reactJS}"></script>
</body>
</html>