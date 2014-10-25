package com.webnognographer;
import grails.converters.*
import org.codehaus.groovy.grails.commons.ApplicationHolder
import org.codehaus.groovy.grails.commons.DomainClassArtefactHandler

def grailsApplication = ApplicationHolder.application
def domainDescriptor = grailsApplication.getDomainClass("com.webnographer.Test")

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
