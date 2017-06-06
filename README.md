This is a starter template for working with React + Webpack + Grommet that is structured to deploy to WCM. It also installs Redux and comes with empty `action` and `reducer` directories that should be populated if you choose to use Redux.

## Quickstart

Run this command in your project's folder:

```sh
curl -fsSL https://github.com/sa-express-news/expressnews-react-template/archive/master.tar.gz | tar -xz --strip-components=1
```

Or `git clone` the repository into an empty directory.

Next, `npm install`.

You'll next want to run `npm run start`.

Currently there is a bug with a Grommet dependency and Sass-Loader that, until new versions are released, will likely throw an error on first load. Here's how to fix it:

Open both of these files:

 - `node_modules/grommet/scss/grommet-core/index.scss`
 - `node_modules/grommet/scss/grommet-core/_settings.scss`

And change all of the `@import`s that begin with `inuit` to `~inuit`. 

Eg. `@import "inuit-normalize/generic.normalize";` becomes `@import "~inuit-normalize/generic.normalize";`. 

Then you should be up and running.

I'll fill out the ReadMe more soon but it's worth noting that the React/Redux structure is based loosely on [this 3-part tutorial](https://css-tricks.com/learning-react-router/) (but we're not using React-Router at the moment due to a WCM conflict we'll need to debug).

## Code Clarity

This template uses [Flow](https://flow.org/en/), a static type checker, to improve code readability and cut down on errors. Flow makes inferences about your code types and throws warnings when something unexpected could happen or you forget to pass a required variable to a function or component.

To run Flow, just type `flow` or `npm run flow` in the project's root directory. This will spawn a background process that analyzes all your code. After that, running `flow` again will give you an almost-instant update on errors since your last check.

You must opt files into Flow's analysis, and you should do it with as many files as possible. To add a file to Flow, simply add the following line of code (comments included) to *the very top of the file:*

`// @flow`

**This template includes a Git pre-commit hook for Flow. That means Flow will run every time you try to commit, and it won't let you commit until your code is free of errors. If you REALLY need to commit around an error, see the segment on ignoring code below. **

### Using Flow

Flow makes it easy to annotate a React component's properties. Simply create a `props` object at the top of your component declaration, filling it in with the name and types of all properties:

```
class MyComponent extends Component {
    props: {
        foo: string,
        bar: Object,
        baz: number,
        bee: Function
    };

    ...

    render(){
        ...
    }
}
```

Etc. [Check out the Flow docs on typing](https://flow.org/en/docs/types/) for more examples.

You can make a property required by throwing a `?` in front of its name:

```
    props: {
        foo?: string,
        bar: Object
    };

    //Flow will throw an error if you use this component without passing it foo, but not if you don't pass it bar.
```

Adding a question mark before a type - like `foo: ?string` - tells Flow that property can either be that type or `null`.

Use the following syntax to set default properties. *Note that if you set default props for a required property, Flow won't throw an error if you don't pass the component that property - it'll silently use the default one.*

```
    props: {
        foo: string
    };

    static defaultProps = {
        foo: 'hello'
    };
```

You should also use Flow to document your functions and React component methods. For example, an event handler should tell Flow it expects an event as a parameter:

```
handleClick = (event: Event) =>{
    //Handle the click event
}
```

If a function expects an object, you don't have to pass flow the Object type. You can just explain the object's structure in your parameter declaration:

```
function greetUser(user:{username: string, password: string}){
    //greet the user
}
```

#### Ignoring code with Flow

Flow is fairly new, and sometimes it doesn't work well with some weird edge case. If you can't please the machine, add `// $FlowFixMe` above the offensive line of code: 

```
// $FlowFixMe
const a = this doesn't work for some reason;
```

Flow will ignore the line immediately following that comment. Try not to use this - the whole point of Flow is to force you to write smarter code :)

## Deploying

In `package.json` enter the path to your S3 bucket as the `s3Bucket` property.

Run `npm run build`.

Upload all compressed assets to S3, minus `index.html`. Load `index.html`'s JS and CSS scripts into a freeform and override the WCM template CSS as necessary.