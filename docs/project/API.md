# API design, security, and documentation

> We try to enforce development of sanely constructed RESTful interfaces, which team members and clients can consume simply and consistently.
>
> Lack of consistency and simplicity can massively increase integration and maintenance costs, which is why `API design` is included in this document.

## Table of contents

<!-- ⛔️ AUTO-GENERATED-CONTENT:START (TOC:excludeText=Table of contents) ⛔️ -->
- [1. **API design**](#1-api-design)
- [2. **API security**](#2-api-security)
- [3. **API documentation**](#3-api-documentation)
<!-- ⛔️ AUTO-GENERATED-CONTENT:END ⛔️ -->

## 1. **API design**

1.  We mostly follow resource-oriented design. It has three main factors: resources, collection, and URLs.

1.  A resource has data, gets nested, and there are methods that operate against it.

1.  A group of resources is called a collection.

1.  URL identifies the online location of resource or collection.

    _Why:_

    > ⌦ This is a very well-known design to developers (your main API consumers). Apart from readability and ease of use, it allows us to write generic libraries and connectors without even knowing what the API is about.

1.  Use kebab-case for URLs.

1.  Use camelCase for parameters in the query string or resource fields.

1.  Use plural kebab-case for resource names in URLs.

1.  Always use a plural nouns for naming a url pointing to a collection: `/users`.

    _Why:_

    > ⌦ Basically, it reads better and keeps URLs consistent. [read more...](https://apigee.com/about/blog/technology/restful-api-design-plural-nouns-and-concrete-names)

1.  In the source code convert plurals to variables and properties with a List suffix.

    _Why_:

    > ⌦ Plural is nice in the URL but in the source code, it’s just too subtle and error-prone.

1.  Always use a singular concept that starts with a collection and ends to an identifier:

    ```http
    /students/245743
    /airports/kjfk
    ```

1.  Avoid URLs like this:

    ```http
    GET /blogs/:blogId/posts/:postId/summary
    ```

    _Why:_

    > ⌦ This is not pointing to a resource but to a property instead. You can pass the property as a parameter to trim your response.

1.  Keep verbs out of your resource URLs.

    _Why:_

    > ⌦ Because if you use a verb for each resource operation you soon will have a huge list of URLs and no consistent pattern which makes it difficult for developers to learn. Plus we use verbs for something else.

1.  Use verbs for non-resources. In this case, your API doesn't return any resources. Instead, you execute an operation and return the result. These **are not** CRUD (create, retrieve, update, and delete) operations:

    ```http
    /translate?text=Hallo
    ```

    _Why:_

    > ⌦ Because for CRUD we use HTTP methods on `resource` or `collection` URLs. The verbs we were talking about are actually `Controllers`. You usually don't develop many of these. [read more...](https://byrondover.github.io/post/restful-api-guidelines/#controller)

1.  The request body or response type is JSON then please follow `camelCase` for `JSON` property names to maintain the consistency.

    _Why:_

    > ⌦ This is a JavaScript project guideline, Where Programming language for generating JSON as well as Programming language for parsing JSON are assumed to be JavaScript.

1.  Even though a resource is a singular concept that is similar to an object instance or database record, you should not use your `table_name` for a resource name and `column_name` resource property.

    _Why:_

    > ⌦ Because your intention is to expose Resources, not your database schema details.

1.  Again, only use nouns in your URL when naming your resources and don’t try to explain their functionality.

    _Why:_

    > ⌦ Only use nouns in your resource URLs, avoid endpoints like `/addNewUser` or `/updateUser` . Also avoid sending resource operations as a parameter.

1.  Explain the CRUD functionalities using HTTP methods:

    _How:_

    > `GET`: Retrieve a representation of a resource.
    >
    > `POST`: Create new resources and sub-resources.
    >
    > `PUT`: Replace existing resources.
    >
    > `PATCH`: Update existing resources. It only updates the fields that were supplied, leaving the others alone.
    >
    > `DELETE`: Delete existing resources.

1.  For nested resources, use the relation between them in the URL. For instance, using `id` to relate an employee to a company.

    _Why:_

    > ⌦ This is a natural way to make resources explorable.
    >
    > _How:_
    >
    > `GET /schools/2/students` , should get the list of all students from school 2.
    >
    > `GET /schools/2/students/31` , should get the details of student 31, which belongs to school 2.
    >
    > `DELETE /schools/2/students/31` , should delete student 31, which belongs to school 2.
    >
    > `PUT /schools/2/students/31` , should update info of student 31, Use PUT on resource-URL only, not collection.
    >
    > `POST /schools` , should create a new school and return the details of the new school created. Use POST on collection-URLs.

1.  Use a simple ordinal number for a version with a `v` prefix (v1, v2). Move it all the way to the left in the URL so that it has the highest scope:

    ```http
    http://api.domain.com/v1/schools/3/students
    ```

    _Why:_

    > ⌦ When your APIs are public for other third parties, upgrading the APIs with some breaking change would also lead to breaking the existing products or services using your APIs. Using versions in your URL can prevent that from happening. [read more...](https://apigee.com/about/blog/technology/restful-api-design-tips-versioning)

1.  Response messages must be self-descriptive. A good error message response might look something like this:

    ```json
    {
      "code": 404,
      "level": "ERROR",
      "logger": "[http-logger]",
      "message":
        "No resource found at URL /archetypes/v1/locales/iso-country-codes/BS",
      "timestamp": 1504878062000
    }
    ```

    or for validation errors:

    ```json
    {
      "code": 400,
      "logger": "[registration-form-logger]",
      "level": "ERROR",
      "timestamp": 1504878062000,
      "message": "Validation Failed",
      "stack": [
        {
          "code": 1233,
          "field": "email",
          "message": "Invalid email"
        },
        {
          "code": 1234,
          "field": "password",
          "message": "No password provided"
        }
      ]
    }
    ```

    _Why:_

    > ⌦ Developers depend on well-designed errors at the critical times when they are troubleshooting and resolving issues after the applications they've built using your APIs are in the hands of their users.

    ---

    _![shield][octicon-shield] **Keep security exception messages as generic as possible.**_ For instance, instead of saying ‘incorrect password’, you can reply back saying ‘invalid username or password’ so that we don’t unknowingly inform user that username was indeed correct and only the password was incorrect.

    ---

1.  Use only these 8 status codes to send with you response to describe whether **everything worked**,
    The **client app did something wrong\*\* or The **API did something wrong\*\*.

    _Which ones:_

    > `200 OK` response represents success for `GET`, `PUT` or `POST` requests.
    >
    > `201 Created` for when new instance is created. Creating a new instance, using `POST` method returns `201` status code.
    >
    > `304 Not Modified` response is to minimize information transfer when the recipient already has cached representations.
    >
    > `400 Bad Request` for when the request was not processed, as the server could not understand what the client is asking for.
    >
    > `401 Unauthorized` for when the request lacks valid credentials and it should re-request with the required credentials.
    >
    > `403 Forbidden` means the server understood the request but refuses to authorize it.
    >
    > `404 Not Found` indicates that the requested resource was not found.
    >
    > `500 Internal Server Error` indicates that the request is valid, but the server could not fulfill it due to some unexpected condition.

    _Why:_

    > ⌦ Most API providers use a small subset HTTP status codes. For example, the Google GData API uses only 10 status codes, Netflix uses 9, and Digg, only 8. Of course, these responses contain a body with additional information.There are over 70 HTTP status codes. However, most developers don't have all 70 memorized. So if you choose status codes that are not very common you will force application developers away from building their apps and over to wikipedia to figure out what you're trying to tell them. [read more...](https://apigee.com/about/blog/technology/restful-api-design-what-about-errors)

1.  Provide total numbers of resources in your response.
1.  Accept `limit` and `offset` parameters.

1.  The amount of data the resource exposes should also be taken into account. The API consumer doesn't always need the full representation of a resource.Use a fields query parameter that takes a comma separated list of fields to include:

    ```http
    GET /student?fields=id,name,age,class
    ```

1.  Pagination, filtering, and sorting don’t need to be supported from start for all resources. Document those resources that offer filtering and sorting.

## 2. **API security**

<img align="bottom" alt="shield" height="30" width="30" src="https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/shield.svg"> These are some basic security best practices.

1.  Don't use basic authentication unless over a secure connection (HTTPS). Authentication tokens must not be transmitted in the URL: `GET /users/123?token=asdf....`

    _Why:_

    > ⌦ Because Token, or user ID and password are passed over the network as clear text (it is base64 encoded, but base64 is a reversible encoding), the basic authentication scheme is not secure. [read more...](https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication)

1.  Tokens must be transmitted using the Authorization header on every request: `Authorization: Bearer xxxxxx, Extra yyyyy`.

1.  Authorization Code should be short-lived.

1.  Reject any non-TLS requests by not responding to any HTTP request to avoid any insecure data exchange. Respond to HTTP requests by `403 Forbidden`.

1.  Consider using Rate Limiting.

    _Why:_

    > ⌦ To protect your APIs from bot threats that call your API thousands of times per hour. You should consider implementing rate limit early on.

1.  Setting HTTP headers appropriately can help to lock down and secure your web application. [read more...](https://github.com/helmetjs/helmet)

1.  Your API should convert the received data to their canonical form or reject them. Return 400 Bad Request with details about any errors from bad or missing data.

1.  All the data exchanged with the ReST API must be validated by the API.

1.  Serialize your JSON.

    _Why:_

    > ⌦ A key concern with JSON encoders is preventing arbitrary JavaScript remote code execution within the browser... or, if you're using node.js, on the server. It's vital that you use a proper JSON serializer to encode user-supplied data properly to prevent the execution of user-supplied input on the browser.

1.  Validate the content-type and mostly use `application/*json` (Content-Type header).

    _Why:_

    > ⌦ For instance, accepting the `application/x-www-form-urlencoded` mime type allows the attacker to create a form and trigger a simple POST request. The server should never assume the Content-Type. A lack of Content-Type header or an unexpected Content-Type header should result in the server rejecting the content with a `4XX` response.

## 3. **API documentation**

1.  **Fill the API section in the README for "API"**.

1.  **Authentication examples.** Describe API authentication methods with a code sample.

1.  **URL structure.** Explaining The URL Structure (path only, no root URL) including The request type (Method). For each endpoint explain:

1.  **URL Params.** If URL Params exist, specify them in accordance with name mentioned in URL section:

    ```http
    Required: id=[integer]
    Optional: photo_id=[alphanumeric]
    ```

    > ![light-bulb][octicon-light-bulb] **POST method types**
    >
    > If the request's method type is POST, provide working examples. URL Params rules apply here too. Separate the section into Optional and Required.

1.  **Success Responses.** What should be the status code and is there any return data? This is useful when people need to know what their callbacks should expect:

    ```http
    Code: 200
    Content: { id : 12 }
    ```

1.  **Error Responses.** Most endpoints have many ways to fail. From unauthorized access to wrongful parameters etc. All of those should be listed here. It might seem repetitive, but it helps prevent assumptions from being made. For example:


    1. **HTTP status code**

        ```http
        404 Not Found
        ```

    1. **Response body**

        ```json
        {
          "code": 404,
          "level": "ERROR",
          "logger": "[http-logger]",
          "message":
            "No resource found at URL /archetypes/v1/locales/iso-country-codes/BS",
          "timestamp": 1504878062000
        }
        ```

    1. **Response headers**

        ```http
        accept-ranges: bytes
        access-control-allow-headers: Authorization
        access-control-allow-methods: GET, HEAD, OPTIONS
        access-control-allow-origin: *
        cache-control: public, no-transform, must-revalidate
        connection: keep-alive
        content-encoding: gzip
        content-language: en-US
        content-length: 149
        content-type: application/json
        date: Fri, 08 Sep 2017 06:41:02 GMT
        last-modified: Tue, 1 Oct 2014 10:10:10 GMT
        server: nginx/1.12.1
        vary: Accept-Encoding
        ```

1.  Use API design tools, There are lots of open source tools for good documentation such as [API Blueprint](https://apiblueprint.org/) and [Swagger](https://swagger.io/).

<!-- ⛔️  Do not remove anything below this comment. ⛔️  -->

[all-contributors-cli-url]: https://github.com/kentcdodds/all-contributors
[autosquashing-git-commits-url]: https://robots.thoughtbot.com/autosquashing-git-commits
[changelog-url]: ./CHANGELOG.md
[cite-interview-torvalds-url]: https://techcrunch.com/2012/04/19/an-interview-with-millenium-technology-prize-finalist-linus-torvalds/
[cla-url]: https://www.clahub.com/agreements/commonality/readme-inspector
[code-of-conduct-url]: ./CODE_OF_CONDUCT.md
[commitplease-url]: https://www.npmjs.com/package/commitplease
[commonality-palette-image]: ./assets/img/palette.svg
[contributing-url]: ./CONTRIBUTING.md
[contribution-lifecycle-issues-image]: ./assets/img/icons8/contribution-lifecycle-create-issue.png
[contribution-lifecycle-pr-image]: ./assets/img/icons8/contribution-lifecycle-pr.png
[conventional-commits-url]: https://conventionalcommits.org
[coolors-palette-url]: https://coolors.co/cfdbd5-e8eddf-f5cb5c-242423-333533
[eslint-logo-image]: ./assets/img/logo-eslint.png
[eslint-rules-table-url]: .github/eslint-rules-table.md
[eslint-url]: https://eslint.org
[force-with-lease-url]: https://developer.atlassian.com/blog/2015/04/force-with-lease/
[fossa-image-large]: https://app.fossa.io/api/projects/git%2Bhttps%3A%2F%2Fgithub.com%2Forganization%2Frepo-name.svg?type=large
[gh-create-account-url]: https://github.com/signup/free
[gh-git-labelmaker-url]: https://github.com/himynameisdave/git-labelmaker
[gh-try-github-url]: https://try.github.io/levels/1/challenges/1
[git-commit-guidelines-url]: https://github.com/commonality/readme-inspector.js/blob/master/CONTRIBUTING.md#commit
[git-resolve-conflicts-url]: https://help.github.com/articles/resolving-a-merge-conflict-using-the-command-line/
[icon-bitbucket-20-image]: ./assets/img/icons8/icon-bitbucket-20.png
[icon-git-logo-image]: ./assets/img/icons8/git-logo.png
[icon-github-20-image]: ./assets/img/icons8/icon-github-filled-20.png
[icon-info-image]: ./assets/img/icons8/icon-info-50.png
[icon-issue-image]: ./assets/img/icons8/icon-issues.png
[icon-pr-image]: ./assets/img/icons8/icon-pr.png
[icon-rest-api-image]: ./assets/img/icons8/icon-rest-api.png
[issues-new-defect-image]: https://img.shields.io/badge/report-defect-F5CB5C.svg?style=for-the-badge&label=report+a
[issues-new-defect-url]: /commonality/readme-inspector.git/issues/new?title=defect%28scope%29%3A+summary-of-change&labels=priority%3A+medium%2Cstatus%3A+review+needed%2Ctype%3A+defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-defect-url]: https://github.com/commonality/readme-inspector/issues/new?title=defect%28scope%29%3A+summary-of-problem&labels=priority%3A+medium%2Cstatus%3A+review+needed%2Ctype%3A+defect&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-image]: https://img.shields.io/badge/request-feature-c1ccc6.svg?style=for-the-badge&label=request+a
[issues-new-feat-url]: /commonality/readme-inspector.git/issues/new?title=feat%28scope%29%3A+summary-of-change&labels=priority%3A+medium%2Cstatus%3A+review+needed%2Ctype%3A+feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-new-feat-url]: https://github.com/commonality/readme-inspector/issues/new?title=feat%28scope%29%3A+summary-of-change&labels=priority%3A+medium%2Cstatus%3A+review+needed%2Ctype%3A+feature&body=%2A%2A%F0%9F%92%A1+TIP%3A%2A%2A+Select+the+%E2%86%96%EF%B8%8E%E2%8E%BE+Preview+%E2%8F%8B+Tab+above+help+read+these+instructions.%0D%0A%0D%0A%23%23+1.+Issue+type%0D%0A%3E%E2%8C%A6+Type+the+letter+%22x%22+in+the+%22checkbox%22+the+best+describe+this+issue.%0D%0A%0D%0A-+%5Bx%5D+**Feature%3A**+I%27m+requesting+a+product+enhancement.%0D%0A%0D%0A%23%23+2.+User+story+summary%0D%0A%3E%E2%8C%A6+Describe+what+you+want+to+accomplish%2C+in+what+role%2Fcapacity%2C+and+why+it%27s+important+to+you.%0D%0A%0D%0A%3E+**EXAMPLE%3A**%0D%0A%3E+As+a+Applicant%2C%0D%0A%3E+I+want+to+submit+my+resume%0D%0A%3E+In+order+to+be+considered+for+a+job+opening.%0D%0A%0D%0AAs+a+%7Brole%7D%2C%0D%0AI+must%2Fneed%2Fwant%2Fshould+%7Bdo+something%7D%0D%0AIn+order+to+%7Bachieve+value%7D.%0D%0A%0D%0A%23%23+3.+Acceptance+criteria%0D%0A%3E%E2%8C%A6+Replace+the+examples+below+with+your+own+imperative%2C+%22true%2Ffalse%22+statements+for+the+**behavior+you+expect**+to+see%2C+or+the+behavior+that+**would**+be+true+if+there+were+no+errors+%28for+defects%29.%0D%0A%0D%0A-+%5B+%5D+1.+Job+Applicants+receive+a+confirmation+email+after+they+submit+their+resumes.%0D%0A-+%5B+%5D+2.+An+Applicant%27s+resume+information+isn%27t+lost+when+errors+occur.%0D%0A-+%5B+%5D+3.+%7Bcriterion-three%7D%0D%0A-+%5B+%5D+4.+%7Bcriterion-four%7D%0D%0A%0D%0A%3C%21--+%E2%9B%94%EF%B8%8F++Do+not+remove+anything+below+this+comment.+%E2%9B%94%EF%B8%8F++--%3E%0D%0A%5Bicon-info-image%5D%3A+..%2Fdocs%2Fimg%2Ficons8%2Ficon-info-50.png%0D%0A
[issues-url]: /commonality/readme-inspector/issues
[issues-url]: https://github.com/commonality/readme-inspector/issues
[jest-logo-image]: ./assets/img/logo-jest.png
[jest-url]: https://facebook.github.io/jest/
[license-url]: ./LICENSE
[makeapullrequest-image]: https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square
[makeapullrequest-url]: http://makeapullrequest.com
[markdown-toc-url]: https://github.com/jonschlinkert/markdown-toc
[osi-logo-image]: ./assets/img/logo-osi.png
[product-development-guidelines-url]: ./assets/product-development-guidelines/js/PRODUCT_DEVELOPEMENT_GUIDELINES.md
[product-repo-logo-image]: ./assets/img/logo-commonalaxy.png
[product-repo-url]: https://github.com/commonality/common-vocabular
[stackshare-badge-image]: https://img.shields.io/badge/tech-stack-0690fa.svg?style=flat-square
[stackshare-url]: https://stackshare.io/commonality/readme-inspector
[standard-js-badge-image]: https://cdn.rawgit.com/standard/standard/master/badge.svg
[standard-js-url]: https://github.com/standard/standard
[standard-version-url]: https://github.com/semantic-release/semantic-releasehttps://github.com/conventional-changelog/standard-version
[tech-stack-image]: ./assets/img/icons8/icon-package-filled.png
[semantic-release-url]: https://github.com/semantic-release/semantic-release

<!-- ⛔️ LINK REFERENCES(Begin) ⛔️  -->

[octicon-alert]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/alert.svg
[octicon-arrow-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-down.svg
[octicon-arrow-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-left.svg
[octicon-arrow-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-right.svg
[octicon-arrow-small-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-down.svg
[octicon-arrow-small-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-left.svg
[octicon-arrow-small-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-right.svg
[octicon-arrow-small-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-small-up.svg
[octicon-arrow-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/arrow-up.svg
[octicon-beaker]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/beaker.svg
[octicon-bell]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bell.svg
[octicon-bold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bold.svg
[octicon-book]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/book.svg
[octicon-bookmark]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bookmark.svg
[octicon-briefcase]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/briefcase.svg
[octicon-broadcast]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/broadcast.svg
[octicon-browser]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/browser.svg
[octicon-bug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/bug.svg
[octicon-calendar]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/calendar.svg
[octicon-check]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/check.svg
[octicon-checklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/checklist.svg
[octicon-chevron-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-down.svg
[octicon-chevron-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-left.svg
[octicon-chevron-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-right.svg
[octicon-chevron-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/chevron-up.svg
[octicon-circle-slash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circle-slash.svg
[octicon-circuit-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/circuit-board.svg
[octicon-clippy]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clippy.svg
[octicon-clock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/clock.svg
[octicon-cloud-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-download.svg
[octicon-cloud-upload]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/cloud-upload.svg
[octicon-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/code.svg
[octicon-comment-discussion]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment-discussion.svg
[octicon-comment]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/comment.svg
[octicon-credit-card]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/credit-card.svg
[octicon-dash]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dash.svg
[octicon-dashboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/dashboard.svg
[octicon-database]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/database.svg
[octicon-desktop-download]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/desktop-download.svg
[octicon-device-camera-video]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera-video.svg
[octicon-device-camera]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-camera.svg
[octicon-device-desktop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-desktop.svg
[octicon-device-mobile]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/device-mobile.svg
[octicon-diff-added]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-added.svg
[octicon-diff-ignored]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-ignored.svg
[octicon-diff-modified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-modified.svg
[octicon-diff-removed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-removed.svg
[octicon-diff-renamed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff-renamed.svg
[octicon-diff]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/diff.svg
[octicon-ellipses]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipses.svg
[octicon-ellipsis]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ellipsis.svg
[octicon-eye]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/eye.svg
[octicon-file-binary]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-binary.svg
[octicon-file-code]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-code.svg
[octicon-file-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-directory.svg
[octicon-file-media]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-media.svg
[octicon-file-pdf]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-pdf.svg
[octicon-file-submodule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-submodule.svg
[octicon-file-symlink-directory]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-directory.svg
[octicon-file-symlink-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-symlink-file.svg
[octicon-file-text]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-text.svg
[octicon-file-zip]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file-zip.svg
[octicon-file]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/file.svg
[octicon-flame]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/flame.svg
[octicon-fold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/fold.svg
[octicon-gear]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gear.svg
[octicon-gift]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gift.svg
[octicon-gist-secret]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist-secret.svg
[octicon-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/gist.svg
[octicon-git-branch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-branch.svg
[octicon-git-commit]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-commit.svg
[octicon-git-compare]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-compare.svg
[octicon-git-merge]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-merge.svg
[octicon-git-pull-request]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/git-pull-request.svg
[octicon-globe]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/globe.svg
[octicon-grabber]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/grabber.svg
[octicon-graph]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/graph.svg
[octicon-heart]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/heart.svg
[octicon-history]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/history.svg
[octicon-home]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/home.svg
[octicon-horizontal-rule]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/horizontal-rule.svg
[octicon-hubot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/hubot.svg
[octicon-inbox]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/inbox.svg
[octicon-info]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/info.svg
[octicon-issue-closed]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-closed.svg
[octicon-issue-opened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-opened.svg
[octicon-issue-reopened]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/issue-reopened.svg
[octicon-italic]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/italic.svg
[octicon-jersey]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/jersey.svg
[octicon-key]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/key.svg
[octicon-keyboard]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/keyboard.svg
[octicon-law]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/law.svg
[octicon-light-bulb]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/light-bulb.svg
[octicon-link-external]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link-external.svg
[octicon-link]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/link.svg
[octicon-list-ordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-ordered.svg
[octicon-list-unordered]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/list-unordered.svg
[octicon-location]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/location.svg
[octicon-lock]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/lock.svg
[octicon-logo-gist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-gist.svg
[octicon-logo-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/logo-github.svg
[octicon-mail-read]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-read.svg
[octicon-mail-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail-reply.svg
[octicon-mail]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mail.svg
[octicon-mark-github]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mark-github.svg
[octicon-markdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/markdown.svg
[octicon-megaphone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/megaphone.svg
[octicon-mention]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mention.svg
[octicon-milestone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/milestone.svg
[octicon-mirror]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mirror.svg
[octicon-mortar-board]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mortar-board.svg
[octicon-mute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/mute.svg
[octicon-no-newline]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/no-newline.svg
[octicon-octoface]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/octoface.svg
[octicon-organization]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/organization.svg
[octicon-package]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/package.svg
[octicon-paintcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/paintcan.svg
[octicon-pencil]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pencil.svg
[octicon-person]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/person.svg
[octicon-pin]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pin.svg
[octicon-plug]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plug.svg
[octicon-plus-small]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus-small.svg
[octicon-plus]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/plus.svg
[octicon-primitive-dot]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-dot.svg
[octicon-primitive-square]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/primitive-square.svg
[octicon-pulse]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/pulse.svg
[octicon-question]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/question.svg
[octicon-quote]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/quote.svg
[octicon-radio-tower]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/radio-tower.svg
[octicon-reply]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/reply.svg
[octicon-repo-clone]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-clone.svg
[octicon-repo-force-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-force-push.svg
[octicon-repo-forked]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-forked.svg
[octicon-repo-pull]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-pull.svg
[octicon-repo-push]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo-push.svg
[octicon-repo]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/repo.svg
[octicon-rocket]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rocket.svg
[octicon-rss]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/rss.svg
[octicon-ruby]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/ruby.svg
[octicon-search]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/search.svg
[octicon-server]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/server.svg
[octicon-settings]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/settings.svg
[octicon-shield]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/shield.svg
[octicon-sign-in]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-in.svg
[octicon-sign-out]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sign-out.svg
[octicon-smiley]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/smiley.svg
[octicon-squirrel]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/squirrel.svg
[octicon-star]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/star.svg
[octicon-stop]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/stop.svg
[octicon-sync]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/sync.svg
[octicon-tag]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tag.svg
[octicon-tasklist]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tasklist.svg
[octicon-telescope]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/telescope.svg
[octicon-terminal]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/terminal.svg
[octicon-text-size]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/text-size.svg
[octicon-three-bars]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/three-bars.svg
[octicon-thumbsdown]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsdown.svg
[octicon-thumbsup]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/thumbsup.svg
[octicon-tools]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/tools.svg
[octicon-trashcan]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/trashcan.svg
[octicon-triangle-down]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-down.svg
[octicon-triangle-left]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-left.svg
[octicon-triangle-right]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-right.svg
[octicon-triangle-up]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/triangle-up.svg
[octicon-unfold]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unfold.svg
[octicon-unmute]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unmute.svg
[octicon-unverified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/unverified.svg
[octicon-verified]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/verified.svg
[octicon-versions]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/versions.svg
[octicon-watch]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/watch.svg
[octicon-x]: https://cdnjs.cloudflare.com/ajax/libs/octicons/4.4.0/svg/x.svg
[toc]: #table-of-contents
