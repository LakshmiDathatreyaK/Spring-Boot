FROM openjdk:12

EXPOSE 9999

ADD target/springboot-mysql-docker.jar springboot-mysql-docker.jar

ENTRYPOINT ["java","-jar","/springboot-mysql-docker.jar"]