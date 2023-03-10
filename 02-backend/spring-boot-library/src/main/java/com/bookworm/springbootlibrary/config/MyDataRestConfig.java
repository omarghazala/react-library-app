package com.bookworm.springbootlibrary.config;

import com.bookworm.springbootlibrary.entity.Book;
import org.springframework.context.annotation.Configuration;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.http.HttpMethod;
import org.springframework.web.servlet.config.annotation.CorsRegistry;

@Configuration
public class MyDataRestConfig implements RepositoryRestConfigurer {
    private String theAllowedOrigins = "http://localhost:3000";
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config, CorsRegistry cors) {
        HttpMethod[] theUnsupportedActions = {HttpMethod.POST,HttpMethod.PUT,HttpMethod.PATCH,HttpMethod.DELETE};

        config.exposeIdsFor(Book.class);

        disableHttpMethods(Book.class,config,theUnsupportedActions);

        /* configuring CORS mapping */

        cors.addMapping(config.getBasePath()+"/**").allowedOrigins(theAllowedOrigins);
    }

    private void disableHttpMethods(Class<Book> bookClass, RepositoryRestConfiguration config, HttpMethod[] theUnsupportedActions) {
        config.getExposureConfiguration()
                .forDomainType(bookClass)
                .withItemExposure(
                        (metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)
                ).withCollectionExposure(
                        (metdata, httpMethods) -> httpMethods.disable(theUnsupportedActions)
                );
    }

}
