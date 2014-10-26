package net.dosaki

import grails.converters.*
import org.codehaus.groovy.grails.commons.ApplicationHolder
import org.codehaus.groovy.grails.commons.DomainClassArtefactHandler

class AngularCrudController {

    /**
     * Takes the full class name (e.g. com.example.AwesomeClass) and optionally
     * an id.
     * Returns a JSON list with the description of the class with all it's
     * attributes and respective values.
     */
    def domain() {
        /*def grailsApplication = ApplicationHolder.application
        def domainDescriptor = grailsApplication.getDomainClass(params.domain);
        def instance = null;
        if(params.id){
            //do only for that id
        }

        def jsonizedDomain = []
        def instanceList = []

        domainDescriptor.getPersistantProperties().each{
            def attrType = it.type.toString().split(" ").last().tokenize('.').collect{it}.last()
            jsonizedDomain.add(['type': attrType, 'name':it.name])
        }

        domainDescriptor.clazz.getAll().each{ instance ->
            def instanceRepr = [:];
            jsonizedDomain.each{ attribute ->
                instanceRepr << [(attribute.name):["attr": instance[attribute.name], "type":attribute.type]]
            }
            instanceList.add(instanceRepr)
        }

        println instanceList.first() as JSON
    }*/
}
