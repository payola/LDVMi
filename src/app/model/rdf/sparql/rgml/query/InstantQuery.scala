package model.rdf.sparql.rgml.query

import java.util.Date
import model.rdf.sparql.query.{SparqlCountQuery}

class InstantQuery(maybeStart: Option[Date], maybeEnd: Option[Date], maybeInstantUrls: Option[Seq[String]], maybeLimit: Option[Int]) extends SparqlCountQuery {
  def get: String = {
    val select = "SELECT ?instant ?date"
    val group  = "GROUP BY ?instant ?date"
    val limit = QueryHelpers.limit(maybeLimit)
    return query(select,group,limit)
  }

  def getCount: String = {
    val select = "COUNT(?instant) AS ?count"
    val group = ""
    val limit = ""
    return query(select, group, limit)
  }

  private def query(select: String, group: String, limit: String) : String =
    s"""
       |PREFIX time: <http://www.w3.org/2006/time#>
       |PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
       |
       |${select}
       |WHERE {
       |  ?instant time:inXSDDateTime ?date.
       |
       |  ${startFilter}
       |  ${endFilter}
       |
       |  ${QueryHelpers.limitValues("instant",maybeInstantUrls)}
       |}
       |
       |${group}
       |${limit}
    """
      .stripMargin

  private def startFilter: String = {
    maybeStart match {
      case Some(start) => {
        return s"""FILTER (xsd:dateTime(?date) > xsd:dateTime("${QueryHelpers.dateToString(start)}"))"""
      }
      case None => ""
    }
  }

  private def endFilter: String = {
    maybeEnd match {
      case Some(end) => {
        return s"""FILTER (xsd:dateTime(?date) < xsd:dateTime("${QueryHelpers.dateToString(end)}"))"""
      }
      case None => ""
    }
  }
}