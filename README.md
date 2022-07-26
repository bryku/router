# router

A basic client side router that comes in a small package [1.1kb].

No Shadow Dom, No Virtual Dom... Just a simple callback function that gives you access to URL and GET parameters.

# Basic Usage

The routing uses `location.hash`. You can use any hash, but for this example we will use [mithril's](https://mithril.js.org/) format.

When calling the **router** function you can specify which route in the index page. This route will load by default if there isn't one specified.
Next you can use the **route** method to add new routes and their callback to the router.

```
let page = document.body;
let app = router('#!/home');
    app.route('#!/home',()=>{
        page.innerText = 'route: about';
    });
    app.route('#!/about',()=>{
        page.innerText = 'route: about';
    });
```

# Multiple Routes

To make things easier, you can specify multiple routes at one time using the **routing** method. 

```
let page = document.body;
let app = router('#!/home');
    app.routing({
        '#!/home': ()=>{
            page.innerText = 'route: home';
        },
        '#!/about': ()=>{
            page.innerText = 'route: user/'+params.user;
        }
    });
```

# URL Parameters

The URL parameters are automatically sent to the callback function as the first variable. In this example we call it **url**.

```
let page = document.body;
let app = router('#!/home');
    app.routing({
        '#!/home': ()=>{
            page.innerText = 'route: home';
        },
        '#!/books/:book': (url)=>{
            // www.website.com/#!/books/harry_potter
            // url.book -> harry_potter
            page.innerText = `route: books / ${url.book}`;
        },
    });
```

# Get Paramters

The GET parameters are automatically sent to the callback function as the second variable. In this example we call it **get**.

```
let page = document.body;
let app = router('#!/home');
    app.routing({
        '#!/home': ()=>{
            page.innerText = 'route: home';
        },
        '#!/books/:book': (url, get)=>{
            // www.website.com/#!/books/harry_potter?test=hello_world
            // url.book -> harry_potter
            // get.test -> hello_world
            page.innerText = `route: books / ${url.book} ? ${get.test}`;
        },
    });
```

