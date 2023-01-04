"use strict";(self.webpackChunkweb=self.webpackChunkweb||[]).push([[7168],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var a=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function r(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=a.createContext({}),s=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,d=r(e,["components","mdxType","originalType","parentName"]),c=s(n),m=o,y=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return n?a.createElement(y,l(l({ref:t},d),{},{components:n})):a.createElement(y,l({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,l=new Array(i);l[0]=c;var r={};for(var p in t)hasOwnProperty.call(t,p)&&(r[p]=t[p]);r.originalType=e,r.mdxType="string"==typeof e?e:o,l[1]=r;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},89227:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>y,frontMatter:()=>p,metadata:()=>d,toc:()=>c});var a=n(87462),o=(n(67294),n(3905)),i=n(44996);const l={toc:[]};function r(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{title:"Using an external auth method?",type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"if your app is using an external authentication method(s) supported by Wasp (such as ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/features#google"},"Google")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/features#github"},"GitHub"),"), make sure to set the necessary environment variables.")))}r.isMDXComponent=!0;const p={title:"Deploying"},s=void 0,d={unversionedId:"deploying",id:"deploying",title:"Deploying",description:"Wasp is in beta, so keep in mind there might be some kinks / bugs, and possibly a bit bigger changes in the future.",source:"@site/docs/deploying.md",sourceDirName:".",slug:"/deploying",permalink:"/docs/deploying",draft:!1,editUrl:"https://github.com/wasp-lang/wasp/edit/main/web/docs/deploying.md",tags:[],version:"current",frontMatter:{title:"Deploying"},sidebar:"docs",previous:{title:"CLI Reference",permalink:"/docs/cli"},next:{title:"Examples",permalink:"/docs/examples"}},u={},c=[{value:"Generating deployable code",id:"generating-deployable-code",level:2},{value:"Deploying API server (backend)",id:"deploying-api-server-backend",level:2},{value:"Env vars",id:"env-vars",level:3},{value:"Deploying to Fly.io (free, recommended)",id:"deploying-to-flyio-free-recommended",level:3},{value:"Set up a Fly.io app (only once per Wasp app)",id:"set-up-a-flyio-app-only-once-per-wasp-app",level:4},{value:"Deploy to a Fly.io app",id:"deploy-to-a-flyio-app",level:4},{value:"Redeploying after Wasp builds",id:"redeploying-after-wasp-builds",level:4},{value:"Deploying to Heroku (non-free)",id:"deploying-to-heroku-non-free",level:3},{value:"Set up a Heroku app (only once per Wasp app)",id:"set-up-a-heroku-app-only-once-per-wasp-app",level:4},{value:"Deploy to a Heroku app",id:"deploy-to-a-heroku-app",level:4},{value:"Deploying web client (frontend)",id:"deploying-web-client-frontend",level:2},{value:"Deploying to Netlify",id:"deploying-to-netlify",level:3},{value:"Deploying to Railway (&quot;freemium&quot;, all-in-one solution)",id:"deploying-to-railway-freemium-all-in-one-solution",level:2},{value:"Create New Project",id:"create-new-project",level:4},{value:"Deploy to services",id:"deploy-to-services",level:4},{value:"Add Environment Variables",id:"add-environment-variables",level:4},{value:"Updates &amp; Redeploying",id:"updates--redeploying",level:4},{value:"Customizing the Dockerfile",id:"customizing-the-dockerfile",level:2}],m={toc:c};function y(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Wasp is in beta, so keep in mind there might be some kinks / bugs, and possibly a bit bigger changes in the future.\nIf you encounter any issues, reach out to us on ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/rzdnErX"},"Discord")," and we will make sure to help you out!")),(0,o.kt)("p",null,'Right now, deploying of Wasp project is done by generating the code and then deploying generated code "manually", as explained below.'),(0,o.kt)("p",null,"In the future, the plan is to have Wasp take care of it completely: you would declaratively define your deployment in .wasp and then just call ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp deploy")," (",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wasp-lang/wasp/issues/169"},"github issue"),")."),(0,o.kt)("p",null,"If you want to deploy your App completely ",(0,o.kt)("strong",{parentName:"p"},"free")," of charge, continue reading below for guides on using Fly.io as your backend (server) provider and Netlify for your frontend (client)."),(0,o.kt)("p",null,"If you prefer to host client and server on ",(0,o.kt)("strong",{parentName:"p"},"one platform"),", and don't mind paying a very small fee for extra features, we suggest following the guide on using ",(0,o.kt)("a",{parentName:"p",href:"#deploying-to-railway-freemium-all-in-one-solution"},"Railway as your provider"),"."),(0,o.kt)("h2",{id:"generating-deployable-code"},"Generating deployable code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"wasp build\n")),(0,o.kt)("p",null,"generates deployable code for the whole app in the ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/build/")," directory. Next, we will deploy this code."),(0,o.kt)("p",null,"NOTE: You will not be able to build the app if you are using SQLite as a database (which is a default database) -> you will have to ",(0,o.kt)("a",{parentName:"p",href:"/docs/language/features#migrating-from-sqlite-to-postgresql"},"switch to PostgreSQL"),"."),(0,o.kt)("h2",{id:"deploying-api-server-backend"},"Deploying API server (backend)"),(0,o.kt)("p",null,"In ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/build/"),", there is a ",(0,o.kt)("inlineCode",{parentName:"p"},"Dockerfile")," describing an image for building the server."),(0,o.kt)("p",null,"To run server in production, deploy this docker image to your favorite hosting provider, ensure that env vars are correctly set, and that is it."),(0,o.kt)("p",null,"Below we will explain the required env vars and also provide detailed instructions for deploying to Fly.io or Heroku."),(0,o.kt)("h3",{id:"env-vars"},"Env vars"),(0,o.kt)("p",null,"Server uses following environment variables, so you need to ensure they are set on your hosting provider:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"PORT")," -> The port number at which it will listen for requests (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"3001"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," -> The URL of the Postgres database it should use (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"postgresql://mydbuser:mypass@localhost:5432/nameofmydb"),")."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"WASP_WEB_CLIENT_URL")," -> The URL of where the frontend app is running (e.g. ",(0,o.kt)("inlineCode",{parentName:"li"},"https://<app-name>.netlify.app"),"), which is necessary for CORS."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"JWT_SECRET")," -> You need this if you are using Wasp's ",(0,o.kt)("inlineCode",{parentName:"li"},"auth")," feature. Set it to a random string (password), at least 32 characters long.")),(0,o.kt)(r,{mdxType:"AddExternalAuthEnvVarsReminder"}),(0,o.kt)("h3",{id:"deploying-to-flyio-free-recommended"},"Deploying to Fly.io (free, recommended)"),(0,o.kt)("p",null,"Fly.io offers a variety of free services that are perfect for deploying your first Wasp app! You will need a Fly.io account and the ",(0,o.kt)("a",{parentName:"p",href:"https://fly.io/docs/hands-on/install-flyctl/"},(0,o.kt)("inlineCode",{parentName:"a"},"flyctl")," CLI"),"."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Fly.io offers support for both locally built Docker containers and remotely built ones. However, for simplicity and reproducability, we will force the use of a remote Fly.io builder."),(0,o.kt)("p",{parentName:"admonition"},"Additionally, ",(0,o.kt)("inlineCode",{parentName:"p"},"fly")," is a symlink for ",(0,o.kt)("inlineCode",{parentName:"p"},"flyctl")," on most systems and they can be used interchangeably.")),(0,o.kt)("p",null,"Make sure you are logged in with ",(0,o.kt)("inlineCode",{parentName:"p"},"flyctl")," CLI. You can check if you are logged in with ",(0,o.kt)("inlineCode",{parentName:"p"},"flyctl auth whoami"),", and if you are not, you can log in with ",(0,o.kt)("inlineCode",{parentName:"p"},"flyctl auth login"),"."),(0,o.kt)("h4",{id:"set-up-a-flyio-app-only-once-per-wasp-app"},"Set up a Fly.io app (only once per Wasp app)"),(0,o.kt)("p",null,"Unless you already have a Fly.io app that you want to deploy to, let's create a new Fly.io app. Position yourself in .wasp/build/ directory (reminder: which you created by running ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp build")," previously):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cd .wasp/build\n")),(0,o.kt)("p",null,"Now from within the ",(0,o.kt)("inlineCode",{parentName:"p"},"build")," directory, run the launch command to set up a new app and create a ",(0,o.kt)("inlineCode",{parentName:"p"},"fly.toml")," file:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flyctl launch --remote-only\n")),(0,o.kt)("p",null,"This will ask a series of questions, including what region to deploy in and if you would like a database."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Say ",(0,o.kt)("strong",{parentName:"li"},'yes to "Would you like to set up a Postgresql database now?", and select Development'),", and Fly.io will set a ",(0,o.kt)("inlineCode",{parentName:"li"},"DATABASE_URL")," for you."),(0,o.kt)("li",{parentName:"ul"},"Say ",(0,o.kt)("strong",{parentName:"li"},'no to "Would you like to deploy now?"'),", as well as any additional questions. We still need to set a few environment variables.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"If your attempts to initiate a new app fail for whatever reason, then you can run ",(0,o.kt)("inlineCode",{parentName:"p"},"flyctl apps destroy <app-name>")," before trying again."),(0,o.kt)("details",null,(0,o.kt)("summary",null,"What does it look like when your DB is deployed correctly?"),(0,o.kt)("div",null,(0,o.kt)("p",null,"When your DB is deployed correctly, you will be able to view it in the ",(0,o.kt)("a",{href:"https://fly.io/dashboard"},"Fly.io dashboard"),":"),(0,o.kt)("img",{width:"662",alt:"image",src:"https://user-images.githubusercontent.com/70215737/201068630-d100db2c-ade5-4874-a29f-6e1890dba2fc.png"})))),(0,o.kt)("p",null,"Next, let's copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"fly.toml")," file up to our Wasp project dir for safekeeping."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"cp fly.toml ../../\n")),(0,o.kt)("p",null,"Next, let's add a few more environment variables:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flyctl secrets set PORT=8080\nflyctl secrets set JWT_SECRET=<random_string_at_least_32_characters_long>\nflyctl secrets set WASP_WEB_CLIENT_URL=<url_of_where_frontend_will_be_deployed>\n\n# If you are using an external auth method (Google or GitHub), make sure to add their vars too!\n# flyctl secrets set GOOGLE_CLIENT_ID=<google_client_id>\n# flyctl secrets set GOOGLE_CLIENT_SECRET=<google_client_secret>\n")),(0,o.kt)(r,{mdxType:"AddExternalAuthEnvVarsReminder"}),(0,o.kt)("p",null,"NOTE: If you do not know what your frontend URL is yet, don't worry. You can set ",(0,o.kt)("inlineCode",{parentName:"p"},"WASP_WEB_CLIENT_URL")," after you deploy your frontend."),(0,o.kt)("p",null,"If you want to make sure you've added your secrets correctly, run ",(0,o.kt)("inlineCode",{parentName:"p"},"flyctl secrets list")," in the terminal. Note that you will see hashed versions of your secrets to protect your sensitive data."),(0,o.kt)("h4",{id:"deploy-to-a-flyio-app"},"Deploy to a Fly.io app"),(0,o.kt)("p",null,"While still in the .wasp/build/ directory, run:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flyctl deploy --remote-only --config ../../fly.toml\n")),(0,o.kt)("p",null,"This will build and deploy the backend of your Wasp app on Fly.io to ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<app-name>.fly.dev"),"! \ud83e\udd18\ud83c\udfb8"),(0,o.kt)("p",null,"Now, if you haven't, you can deploy your frontend -- ",(0,o.kt)("a",{parentName:"p",href:"#deploying-web-client-frontend"},"we suggest using Netlify")," for this -- and add the client url by running ",(0,o.kt)("inlineCode",{parentName:"p"},"flyctl secrets set WASP_WEB_CLIENT_URL=<url_of_deployed_frontend>")),(0,o.kt)("p",null,"Additionally, some useful commands include:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"flyctl logs\nflyctl secrets list\nflyctl ssh console\n")),(0,o.kt)("h4",{id:"redeploying-after-wasp-builds"},"Redeploying after Wasp builds"),(0,o.kt)("p",null,"When you rebuild your Wasp app (with ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp build"),"), it will remove your .wasp/build/ directory. In there, you may have a ",(0,o.kt)("inlineCode",{parentName:"p"},"fly.toml")," from any prior Fly.io deployments. While we will improve this process in the future, in the meantime, you have a few options:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Copy the ",(0,o.kt)("inlineCode",{parentName:"li"},"fly.toml")," file to a versioned directory, like your Wasp project dir. From there, you can reference it in ",(0,o.kt)("inlineCode",{parentName:"li"},"flyctl deploy --config <path>")," commands, like above."),(0,o.kt)("li",{parentName:"ol"},"Backup the ",(0,o.kt)("inlineCode",{parentName:"li"},"fly.toml")," file somewhere before running ",(0,o.kt)("inlineCode",{parentName:"li"},"wasp build"),", and copy it into .wasp/build/ after. When the ",(0,o.kt)("inlineCode",{parentName:"li"},"fly.toml")," file exists in .wasp/build/ dir, you do not need to specify the ",(0,o.kt)("inlineCode",{parentName:"li"},"--config <path>"),"."),(0,o.kt)("li",{parentName:"ol"},"Run ",(0,o.kt)("inlineCode",{parentName:"li"},"flyctl config save -a <app-name>")," to regenerate the ",(0,o.kt)("inlineCode",{parentName:"li"},"fly.toml")," file from the remote state stored in Fly.io.")),(0,o.kt)("h3",{id:"deploying-to-heroku-non-free"},"Deploying to Heroku (non-free)"),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Heroku used to offer free apps under certain limits. However, as of November 28, 2022, they ended support for their free tier. ",(0,o.kt)("a",{parentName:"p",href:"https://blog.heroku.com/next-chapter"},"https://blog.heroku.com/next-chapter")),(0,o.kt)("p",{parentName:"admonition"},"As such, we recommend using an alternative provider like ",(0,o.kt)("a",{parentName:"p",href:"#deploying-to-flyio-free-recommended"},"Fly.io")," for your first apps.")),(0,o.kt)("p",null,"You will need Heroku account, ",(0,o.kt)("inlineCode",{parentName:"p"},"heroku")," CLI and ",(0,o.kt)("inlineCode",{parentName:"p"},"docker")," CLI installed to follow these instructions."),(0,o.kt)("p",null,"Make sure you are logged in with ",(0,o.kt)("inlineCode",{parentName:"p"},"heroku")," CLI. You can check if you are logged in with ",(0,o.kt)("inlineCode",{parentName:"p"},"heroku whoami"),", and if you are not, you can log in with ",(0,o.kt)("inlineCode",{parentName:"p"},"heroku login"),"."),(0,o.kt)("h4",{id:"set-up-a-heroku-app-only-once-per-wasp-app"},"Set up a Heroku app (only once per Wasp app)"),(0,o.kt)("p",null,"Unless you already have a heroku app that you want to deploy to, let's create a new Heroku app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"heroku create <app-name>\n")),(0,o.kt)("p",null,"Unless you have external Postgres database that you want to use, let's create new database on Heroku and attach it to our app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"heroku addons:create --app <app-name> heroku-postgresql:mini\n")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Heroku does not offer a free plan anymore and ",(0,o.kt)("inlineCode",{parentName:"p"},"mini")," is their cheapest database instance - it costs $5/mo.")),(0,o.kt)("p",null,"Heroku will also set ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_URL")," env var for us at this point. If you are using external database, you will have to set it yourself."),(0,o.kt)("p",null,"The ",(0,o.kt)("inlineCode",{parentName:"p"},"PORT")," env var will also be provided by Heroku, so the only two left to set are the ",(0,o.kt)("inlineCode",{parentName:"p"},"JWT_SECRET")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"WASP_WEB_CLIENT_URL")," env vars:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"heroku config:set --app <app-name> JWT_SECRET=<random_string_at_least_32_characters_long>\nheroku config:set --app <app-name> WASP_WEB_CLIENT_URL=<url_of_where_frontend_will_be_deployed>\n")),(0,o.kt)("p",null,"NOTE: If you do not know what your frontend URL is yet, don't worry. You can set ",(0,o.kt)("inlineCode",{parentName:"p"},"WASP_WEB_CLIENT_URL")," after you deploy your frontend."),(0,o.kt)("h4",{id:"deploy-to-a-heroku-app"},"Deploy to a Heroku app"),(0,o.kt)("p",null,"Position yourself in ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/build/")," directory (reminder: which you created by running ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp build")," previously):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd .wasp/build\n")),(0,o.kt)("p",null,"assuming you were at the root of your Wasp project at that moment."),(0,o.kt)("p",null,"Log in to Heroku Container Registry:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"heroku container:login\n")),(0,o.kt)("p",null,"Build the docker image and push it to Heroku:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"heroku container:push --app <app-name> web\n")),(0,o.kt)("p",null,"App is still not deployed at this point.\nThis step might take some time, especially the very first time, since there are no cached docker layers."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h4",{parentName:"admonition",id:"note-for-apple-m1-users"},"Note for Apple M1 users"),(0,o.kt)("p",{parentName:"admonition"},"Apple M1 users need to build a non-Arm image, so the above step will not work at this time. Instead of ",(0,o.kt)("inlineCode",{parentName:"p"},"heroku container:push"),", users instead should:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker buildx build --platform linux/amd64 -t <app-name> .\ndocker tag <app-name> registry.heroku.com/<app-name>/web\ndocker push registry.heroku.com/<app-name>/web\n")),(0,o.kt)("p",{parentName:"admonition"},"You are now ready to proceed to the next step.")),(0,o.kt)("p",null,"Deploy the pushed image and restart the app:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"heroku container:release --app <app-name> web\n")),(0,o.kt)("p",null,"This is it, backend is deployed at ",(0,o.kt)("inlineCode",{parentName:"p"},"https://<app-name>.herokuapp.com"),"!"),(0,o.kt)("p",null,"Additionally, you can check out the logs with:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"heroku logs --tail --app <app-name>\n")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("h4",{parentName:"admonition",id:"note-on-using-pg-boss-with-heroku"},"Note on using pg-boss with Heroku"),(0,o.kt)("p",{parentName:"admonition"},"If you wish to deploy an app leveraging Jobs that use pg-boss as the executor to Heroku, you need to set an additional environment variable called ",(0,o.kt)("inlineCode",{parentName:"p"},"PG_BOSS_NEW_OPTIONS")," to ",(0,o.kt)("inlineCode",{parentName:"p"},'{"connectionString":"<REGULAR_HEROKU_DATABASE_URL>","ssl":{"rejectUnauthorized":false}}'),". This is because pg-boss uses the ",(0,o.kt)("inlineCode",{parentName:"p"},"pg")," extension, which does not seem to connect to Heroku over SSL by default, which Heroku requires. Additionally, Heroku uses a self-signed cert, so we must handle that as well."),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://devcenter.heroku.com/articles/connecting-heroku-postgres#connecting-in-node-js"},"https://devcenter.heroku.com/articles/connecting-heroku-postgres#connecting-in-node-js")))),(0,o.kt)("h2",{id:"deploying-web-client-frontend"},"Deploying web client (frontend)"),(0,o.kt)("p",null,"Position yourself in ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/build/web-app")," directory (reminder: which you created by running ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp build")," previously):"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"cd .wasp/build/web-app\n")),(0,o.kt)("p",null,"assuming you were at the root of your Wasp project at that moment."),(0,o.kt)("p",null,"Run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"npm install && REACT_APP_API_URL=<url_to_wasp_backend> npm run build\n")),(0,o.kt)("admonition",{title:"NO SLASH",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure your API URL does ",(0,o.kt)("strong",null,"not"),' have a trailing "/" on the end of it:',(0,o.kt)("br",null),"\n\u2705 ",(0,o.kt)("a",{parentName:"p",href:"https://backend.example.com"},"https://backend.example.com")," ",(0,o.kt)("br",null),"\u274c ",(0,o.kt)("a",{parentName:"p",href:"https://backend.example.com/"},"https://backend.example.com/")," ")),(0,o.kt)("p",null,"where <url_to_wasp_backend> is url of the wasp backend that you previously deployed, e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"https://wasp-test.fly.dev"),"."),(0,o.kt)("p",null,"This will create ",(0,o.kt)("inlineCode",{parentName:"p"},"build/")," directory, which you can deploy to any static hosting provider.\nCheck instructions below for deploying to Netlify."),(0,o.kt)("h3",{id:"deploying-to-netlify"},"Deploying to Netlify"),(0,o.kt)("p",null,"Netlify is a static hosting solution that is free for many use cases.\nYou will need Netlify account and ",(0,o.kt)("inlineCode",{parentName:"p"},"netlify")," CLI installed to follow these instructions."),(0,o.kt)("p",null,"Make sure you are logged in with ",(0,o.kt)("inlineCode",{parentName:"p"},"netlify")," CLI. You can check if you are logged in with ",(0,o.kt)("inlineCode",{parentName:"p"},"netlify status"),", and if you are not, you can log in with ",(0,o.kt)("inlineCode",{parentName:"p"},"netlify login"),"."),(0,o.kt)("p",null,"While positioned in ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/build/web-app/")," directory, and after you have created ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/build/web-app/build/")," directory as per instructions above, run"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"netlify deploy\n")),(0,o.kt)("p",null,"and carefully follow their instructions (i.e. do you want to create a new app or use existing one, team under which your app will reside, ..., final step to run ",(0,o.kt)("inlineCode",{parentName:"p"},"netlify deploy --prod"),")."),(0,o.kt)("p",null,"That is it!"),(0,o.kt)("p",null,"NOTE: Make sure you set this URL as the ",(0,o.kt)("inlineCode",{parentName:"p"},"WASP_WEB_CLIENT_URL")," environment variable in your server hosting environment (e.g., Fly.io or Heroku)."),(0,o.kt)("h2",{id:"deploying-to-railway-freemium-all-in-one-solution"},'Deploying to Railway ("freemium", all-in-one solution)'),(0,o.kt)("p",null,"Railway makes it easy to deploy your entire app -- database, server, and client -- on one platform. You can use the platform for free for a limited time (~21 days) per month. Upgrading to the ",(0,o.kt)("inlineCode",{parentName:"p"},"Developer")," plan will only cost you a few dollays per month per service."),(0,o.kt)("admonition",{title:"\ud83d\uded1",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},"  Due to Railway's current proxy configuration, Google Auth will not currently work. If you're using Google Auth in your Wasp App, you can still deploy your back-end to Railway, but we suggest you ",(0,o.kt)("a",{parentName:"p",href:"#deploying-to-netlify"},"deploy your front-end to Netlify"))),(0,o.kt)("p",null,"To get started, follow these steps:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("a",{parentName:"li",href:"#generating-deployable-code"},"Generate deployable code")," (",(0,o.kt)("inlineCode",{parentName:"li"},"wasp build"),")"),(0,o.kt)("li",{parentName:"ol"},"Sign up at ",(0,o.kt)("a",{parentName:"li",href:"https://railway.app"},"Railway.app")," (Tip! Sign up with your GitHub account for $5/month of usage free)"),(0,o.kt)("li",{parentName:"ol"},"Before creating a new project, install the ",(0,o.kt)("a",{parentName:"li",href:"#https://docs.railway.app/develop/cli#install"},"Railway CLI")," by running the following command in your terminal:",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"curl -fsSL https://railway.app/install.sh | sh\n"))),(0,o.kt)("li",{parentName:"ol"},"While still in the terminal, run ",(0,o.kt)("inlineCode",{parentName:"li"},"railway login")," and a browser tab will open to authenticate you.")),(0,o.kt)("h4",{id:"create-new-project"},"Create New Project"),(0,o.kt)("p",null,"Go back to your ",(0,o.kt)("a",{parentName:"p",href:"https://railway.app/dashboard"},"Railway dashboard"),", click on ",(0,o.kt)("strong",{parentName:"p"},"+ New Project"),", and select ",(0,o.kt)("inlineCode",{parentName:"p"},"Provision PostgreSQL")," from the dropdown menu."),(0,o.kt)("p",null,"Once it initializes, right click on the ",(0,o.kt)("inlineCode",{parentName:"p"},"+ New")," button in the top right corner and select ",(0,o.kt)("inlineCode",{parentName:"p"},">_ Empty Service"),". Once it initializes, click on it, go to ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings > General")," and change the name (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"server"),")."),(0,o.kt)("p",null,"Go ahead and create another empty service and name it (e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"client"),")."),(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("em",null,"Just in case, here is a helpful screenshot ;)")),(0,o.kt)("div",null,(0,o.kt)("img",{alt:"Create an Empty Service",src:(0,i.Z)("img/deploying/railway-rename.png")}))),(0,o.kt)("h4",{id:"deploy-to-services"},"Deploy to services"),(0,o.kt)("p",null,"Now go back to your terminal and execute the following commands:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Move into your app's ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/build/")," directory, which was created when you ran ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp build")," previously:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd .wasp/build\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'"Link" your app build to your newly created Railway project:'),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"railway link\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Push and deploy the project to railway (make sure you're in ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/build"),"):"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"railway up\n")),(0,o.kt)("p",{parentName:"li"},"Select ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," when prompted with ",(0,o.kt)("inlineCode",{parentName:"p"},"Select Service"),". Press enter.\nRailway will now locate the Dockerfile and deploy your server \ud83d\udc4d"),(0,o.kt)("p",{parentName:"li"},"When deployment is finished, you might see: ",(0,o.kt)("inlineCode",{parentName:"p"},"Deployment live at <url_to_wasp_backend>"),". If not, go now to your ",(0,o.kt)("a",{parentName:"p",href:"https://railway.app/dashboard"},"Railway dashboard")," and in the server instance's ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," tab, click ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate Domain"),". Copy the new URL as we will need it for step 5! \ud83d\udcdc")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, change into your app's frontend build directory ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/build/web-app"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd web-app\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Create the production build, adding the URL from step 3:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"npm install && REACT_APP_API_URL=<url_to_wasp_backend> npm run build\n")),(0,o.kt)("admonition",{parentName:"li",title:"NO SLASH",type:"info"},(0,o.kt)("p",{parentName:"admonition"},"Make sure your API URL does ",(0,o.kt)("strong",null,"not"),' have a trailing "/" on the end of it:',(0,o.kt)("br",null),"\n\u2705 ",(0,o.kt)("a",{parentName:"p",href:"https://backend.example.com"},"https://backend.example.com")," ",(0,o.kt)("br",null),"\u274c ",(0,o.kt)("a",{parentName:"p",href:"https://backend.example.com/"},"https://backend.example.com/")," "))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Change into the ",(0,o.kt)("inlineCode",{parentName:"p"},".wasp/build/web-app/build")," directory:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"cd build \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Next, we want to link this specific frontend directory to our project as well:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"railway link \n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Deploy the client and select ",(0,o.kt)("inlineCode",{parentName:"p"},"client")," when prompted with ",(0,o.kt)("inlineCode",{parentName:"p"},"Select Service"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"railway up\n"))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"Your apps are deployed \ud83e\uddd9\u200d\u2642\ufe0f. Now it's time to add environment variables, so open the project in the browser"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"railway open\n")))),(0,o.kt)("h4",{id:"add-environment-variables"},"Add Environment Variables"),(0,o.kt)("p",null,"Back in your ",(0,o.kt)("a",{parentName:"p",href:"https://railway.app/dashboard"},"Railway dashboard"),", click on your project and you should see your newly deployed services: Postgres, Server, and Client."),(0,o.kt)("p",null,"Now you're going to pass each service the correct ",(0,o.kt)("a",{parentName:"p",href:"#env-vars"},"environment variables"),". To do this, you first need to tell Railway to generate public domains for client and server. "),(0,o.kt)("p",null,"Go to the server instance's ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings")," tab, and click ",(0,o.kt)("inlineCode",{parentName:"p"},"Generate Domain"),". Do the same under the client's ",(0,o.kt)("inlineCode",{parentName:"p"},"Settings"),"."),(0,o.kt)("p",null,"The Postgres database is already initialized with a domain, so click on the Postgres instance, go to the ",(0,o.kt)("strong",{parentName:"p"},"Connect")," tab and copy the ",(0,o.kt)("inlineCode",{parentName:"p"},"Postgres Connection URL"),". "),(0,o.kt)("p",null,"Go back to your ",(0,o.kt)("inlineCode",{parentName:"p"},"server")," instance and navigate to its ",(0,o.kt)("inlineCode",{parentName:"p"},"Variables")," tab. Now add the copied Postgres URL as ",(0,o.kt)("inlineCode",{parentName:"p"},"DATABASE_URL"),", as well as the client's domain as ",(0,o.kt)("inlineCode",{parentName:"p"},"WASP_WEB_CLIENT_URL"),"."),(0,o.kt)(r,{mdxType:"AddExternalAuthEnvVarsReminder"}),"Next, copy the server's domain, move over to the client's `Variables` tab and add the generated server domain as a new variable called `REACT_APP_API_URL`.",(0,o.kt)("details",null,(0,o.kt)("summary",null,(0,o.kt)("em",null,"Having trouble finding these settings?")),(0,o.kt)("div",null,(0,o.kt)("figure",null,(0,o.kt)("img",{src:(0,i.Z)("img/deploying/railway-postgres-url.png")}),(0,o.kt)("figcaption",{class:"image-caption"},"Postgres Connection URL")),(0,o.kt)("figure",null,(0,o.kt)("img",{src:(0,i.Z)("img/deploying/railway-server-var.png")}),(0,o.kt)("figcaption",{class:"image-caption"},"Env Variables")))),(0,o.kt)("p",null,"And now you should be deployed! \ud83d\udc1d \ud83d\ude82 \ud83d\ude80"),(0,o.kt)("h4",{id:"updates--redeploying"},"Updates & Redeploying"),(0,o.kt)("p",null,"When you make updates and need to redeploy, just follow ",(0,o.kt)("a",{parentName:"p",href:"#deploy-to-services"},"steps 3-7")," above. Remember, you can connect or disconnect your app to any project in your Railway account by using ",(0,o.kt)("inlineCode",{parentName:"p"},"railway link")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"railway unlink")," from within the app's directory."),(0,o.kt)("h2",{id:"customizing-the-dockerfile"},"Customizing the Dockerfile"),(0,o.kt)("p",null,"By default, Wasp will generate a multi-stage Dockerfile that is capable of building an image with your Wasp-generated server code and running it, along with any pending migrations, as in the deployment scenario above. If you need to customize this Dockerfile, you may do so by adding a Dockerfile to your project root directory. If present, Wasp will append the contents of this file to the ",(0,o.kt)("em",{parentName:"p"},"bottom")," of our default Dockerfile."),(0,o.kt)("p",null,"Since the last definition in a Dockerfile wins, you can override or continue from any existing build stages. You could also choose not to use any of our build stages and have your own custom Dockerfile used as-is. A few notes are in order:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"if you override an intermediate build stage, no later build stages will be used unless you reproduce them below"),(0,o.kt)("li",{parentName:"ul"},"the contents of the Dockerfile are dynamic, based on the features you use, and may change in future releases as well, so please verify the contents have not changed from time to time"),(0,o.kt)("li",{parentName:"ul"},"be sure to supply an ",(0,o.kt)("inlineCode",{parentName:"li"},"ENTRYPOINT")," in your final build stage or it will not have any effect")),(0,o.kt)("p",null,"To see what your project's (potentially combined) Dockerfile will look like, run: ",(0,o.kt)("inlineCode",{parentName:"p"},"wasp dockerfile")),(0,o.kt)("p",null,"Here are the official docker docs on ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/build/building/multi-stage/"},"multi-stage builds"),". Please join our Discord if you have any questions, or if the customization hook provided here is not sufficient for your needs!"))}y.isMDXComponent=!0}}]);