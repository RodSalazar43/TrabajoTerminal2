<%@page contentType="text/plain" pageEncoding="UTF-8"%>
<%
  out.println(request.getParameter("tipo")+"/"+request.getParameter("tipo")+".html?id="+request.getParameter("id")+"&idGrupo="+request.getParameter("idGrupo")+"&idProfesor="+request.getParameter("idProfesor"));
%>
