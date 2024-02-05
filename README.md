1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd my-awesome-portfolio/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-blog-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

1.  **Before deploying, verify built website.**

```sh
  npm run build
  npm run serve
```

1. **To deploy**

The website is deployed to netlify automatically when merged to `main` branch. Login via your github account to see the netlify deployments. We can find out the netlify app by looking at the domain's DNS record.

```sh
  dig www.mattcosta.me +nostats +nocomments +nocmd

; <<>> DiG 9.10.6 <<>> www.mattcosta.me +nostats +nocomments +nocmd
;; global options: +cmd
;www.mattcosta.me.              IN      A
www.mattcosta.me.       1800    IN      CNAME   thirsty-bardeen-29c899.netlify.app.
thirsty-bardeen-29c899.netlify.app. 60 IN A     13.57.148.141
thirsty-bardeen-29c899.netlify.app. 60 IN A     52.9.166.110
```
