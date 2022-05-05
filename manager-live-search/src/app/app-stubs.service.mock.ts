import { of } from 'rxjs';

export class ManagerServiceStub {
getManagersData() {
    return of({
      data:  [
        {
          "type": "employees",
          "id": "323",
          "links": {
            "self": "http://localhost:3000/v1/employees/323"
          },
          "attributes": {
            "identifier": null,
            "firstName": "Harriet",
            "lastName": "McKinney",
            "name": "Harriet McKinney",
            "features": [
              "engagement"
            ],
            "avatar": null,
            "employmentStart": "2016-01-31T00:00:00.000Z",
            "external": false,
            "Last Year Bonus": 3767,
            "Business Unit": "Sales",
            "Commute Time": 34,
            "Age": "1984-02-08",
            "Department": "Customer Care",
            "Gender": "Female",
            "Job Level": "Manager",
            "Local Office": "Kuala Lumpur",
            "% of target": 88,
            "Region": "APAC",
            "Salary": 76000,
            "Tenure": "2014-05-31"
          },
          "relationships": {
            "company": {
              "data": {
                "type": "companies",
                "id": "5"
              }
            },
            "account": {
              "data": {
                "type": "accounts",
                "id": "324"
              }
            },
            "phones": {
              "data": []
            },
            "Manager": {
              "data": {
                "type": "employees",
                "id": "201"
              }
            }
          }
        },
        {
          "type": "employees",
          "id": "139",
          "links": {
            "self": "http://localhost:3000/v1/employees/139"
          },
          "attributes": {
            "identifier": null,
            "firstName": "Harriet",
            "lastName": "Banks",
            "name": "Harriet Banks",
            "features": [
              "engagement"
            ],
            "avatar": null,
            "employmentStart": "2016-01-31T00:00:00.000Z",
            "external": false,
            "Last Year Bonus": 215835,
            "Business Unit": "People & Operations",
            "Commute Time": 18,
            "Age": "1984-04-19",
            "Department": "Learning and Development",
            "Gender": "Female",
            "Job Level": "Executive",
            "Local Office": "New York",
            "% of target": 12,
            "Region": "AMER",
            "Salary": 332000,
            "Tenure": "2009-06-30"
          },
          "relationships": {
            "company": {
              "data": {
                "type": "companies",
                "id": "5"
              }
            },
            "account": {
              "data": {
                "type": "accounts",
                "id": "140"
              }
            },
            "phones": {
              "data": []
            }
          }
        },
        {
          "type": "employees",
          "id": "142",
          "links": {
            "self": "http://localhost:3000/v1/employees/142"
          },
          "attributes": {
            "identifier": null,
            "firstName": "Mathilda",
            "lastName": "Summers",
            "name": "Mathilda Summers",
            "features": [
              "engagement"
            ],
            "avatar": null,
            "employmentStart": "2016-01-31T00:00:00.000Z",
            "external": false,
            "Last Year Bonus": 95050,
            "Business Unit": "Marketing",
            "Commute Time": 131,
            "Age": "1976-12-19",
            "Department": "Media",
            "Gender": "Female",
            "Job Level": "Executive",
            "Local Office": "London",
            "% of target": 166,
            "Region": "EMEA",
            "Salary": 248000,
            "Tenure": "2000-05-15"
          },
          "relationships": {
            "company": {
              "data": {
                "type": "companies",
                "id": "5"
              }
            },
            "account": {
              "data": {
                "type": "accounts",
                "id": "143"
              }
            },
            "phones": {
              "data": []
            },
            "Manager": {
              "data": {
                "type": "employees",
                "id": "139"
              }
            }
          }
        },
        {
          "type": "employees",
          "id": "140",
          "links": {
            "self": "http://localhost:3000/v1/employees/140"
          },
          "attributes": {
            "identifier": null,
            "firstName": "Eugene",
            "lastName": "Wong",
            "name": "Eugene Wong",
            "features": [
              "engagement"
            ],
            "avatar": null,
            "employmentStart": "2016-01-31T00:00:00.000Z",
            "external": false,
            "Last Year Bonus": 157643,
            "Business Unit": "Technology",
            "Commute Time": 16,
            "Age": "1980-03-21",
            "Department": "Engineering",
            "Gender": "Male",
            "Job Level": "Executive",
            "Local Office": "New York",
            "% of target": 180,
            "Region": "AMER",
            "Salary": 483000,
            "Tenure": "2011-01-31"
          },
          "relationships": {
            "company": {
              "data": {
                "type": "companies",
                "id": "5"
              }
            },
            "account": {
              "data": {
                "type": "accounts",
                "id": "141"
              }
            },
            "phones": {
              "data": []
            },
            "Manager": {
              "data": {
                "type": "employees",
                "id": "139"
              }
            }
          }
        },
        {
          "type": "employees",
          "id": "340",
          "links": {
            "self": "http://localhost:3000/v1/employees/340"
          },
          "attributes": {
            "identifier": null,
            "firstName": "New",
            "lastName": "Manager",
            "name": "New Manager",
            "features": [
              "engagement"
            ],
            "avatar": null,
            "employmentStart": "2018-02-23T09:09:44.447Z",
            "external": false
          },
          "relationships": {
            "company": {
              "data": {
                "type": "companies",
                "id": "5"
              }
            },
            "account": {
              "data": {
                "type": "accounts",
                "id": "341"
              }
            },
            "phones": {
              "data": []
            },
            "Manager": {
              "data": {
                "type": "employees",
                "id": "139"
              }
            }
          }
        },
        {
          "type": "employees",
          "id": "145",
          "links": {
            "self": "http://localhost:3000/v1/employees/145"
          },
          "attributes": {
            "identifier": null,
            "firstName": "Marguerite",
            "lastName": "Ryan",
            "name": "Marguerite Ryan",
            "features": [
              "engagement"
            ],
            "avatar": null,
            "employmentStart": "2016-01-31T00:00:00.000Z",
            "external": false,
            "Last Year Bonus": 81656,
            "Business Unit": "Sales",
            "Commute Time": 111,
            "Age": "1991-09-14",
            "Department": "Sales Development",
            "Gender": "Female",
            "Job Level": "Executive",
            "Local Office": "Berlin",
            "% of target": 121,
            "Region": "EMEA",
            "Salary": 341000,
            "Tenure": "2015-01-29"
          },
          "relationships": {
            "company": {
              "data": {
                "type": "companies",
                "id": "5"
              }
            },
            "account": {
              "data": {
                "type": "accounts",
                "id": "146"
              }
            },
            "phones": {
              "data": []
            },
            "Manager": {
              "data": {
                "type": "employees",
                "id": "139"
              }
            }
          }
        },
        {
          "type": "employees",
          "id": "171",
          "links": {
            "self": "http://localhost:3000/v1/employees/171"
          },
          "attributes": {
            "identifier": null,
            "firstName": "Donald",
            "lastName": "Butler",
            "name": "Donald Butler",
            "features": [
              "engagement"
            ],
            "avatar": null,
            "employmentStart": "2016-01-31T00:00:00.000Z",
            "external": false,
            "Last Year Bonus": 277768,
            "Business Unit": "IT",
            "Commute Time": 38,
            "Age": "1990-02-23",
            "Department": "Security",
            "Gender": "Male",
            "Job Level": "Executive",
            "Local Office": "Berlin",
            "% of target": 8,
            "Region": "EMEA",
            "Salary": 238000,
            "Tenure": "2013-04-12"
          },
          "relationships": {
            "company": {
              "data": {
                "type": "companies",
                "id": "5"
              }
            },
            "account": {
              "data": {
                "type": "accounts",
                "id": "172"
              }
            },
            "phones": {
              "data": []
            },
            "Manager": {
              "data": {
                "type": "employees",
                "id": "139"
              }
            }
          }
        },
        {
          "type": "employees",
          "id": "151",
          "links": {
            "self": "http://localhost:3000/v1/employees/151"
          },
          "attributes": {
            "identifier": null,
            "firstName": "Jim",
            "lastName": "Carlson",
            "name": "Jim Carlson",
            "features": [
              "engagement"
            ],
            "avatar": null,
            "employmentStart": "2016-01-31T00:00:00.000Z",
            "external": false,
            "Last Year Bonus": 85637,
            "Business Unit": "Finance",
            "Commute Time": 111,
            "Age": "1968-06-06",
            "Department": "Accounting",
            "Gender": "Male",
            "Job Level": "Executive",
            "Local Office": "Beijing",
            "% of target": 95,
            "Region": "APAC",
            "Salary": 163000,
            "Tenure": "2013-04-29"
          },
          "relationships": {
            "company": {
              "data": {
                "type": "companies",
                "id": "5"
              }
            },
            "account": {
              "data": {
                "type": "accounts",
                "id": "152"
              }
            },
            "phones": {
              "data": []
            },
            "Manager": {
              "data": {
                "type": "employees",
                "id": "139"
              }
            }
          }
        },
        {
          "type": "employees",
          "id": "141",
          "links": {
            "self": "http://localhost:3000/v1/employees/141"
          },
          "attributes": {
            "identifier": null,
            "firstName": "Alta",
            "lastName": "Maxwell",
            "name": "Alta Maxwell",
            "features": [
              "engagement"
            ],
            "avatar": null,
            "employmentStart": "2016-01-31T00:00:00.000Z",
            "external": false,
            "Last Year Bonus": 137145,
            "Business Unit": "People & Operations",
            "Commute Time": 67,
            "Age": "1988-07-04",
            "Department": "Recruitment",
            "Gender": "Female",
            "Job Level": "Executive",
            "Local Office": "Tokyo",
            "% of target": 21,
            "Region": "APAC",
            "Salary": 441000,
            "Tenure": "2016-04-17"
          },
          "relationships": {
            "company": {
              "data": {
                "type": "companies",
                "id": "5"
              }
            },
            "account": {
              "data": {
                "type": "accounts",
                "id": "142"
              }
            },
            "phones": {
              "data": []
            },
            "Manager": {
              "data": {
                "type": "employees",
                "id": "139"
              }
            }
          }
        }
      ]
    });
  }

}