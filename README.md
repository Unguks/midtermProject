# midtermProject
A demo of backend side of website

## How To Run

```
# npm
npm start

Start the development server on http://localhost:3000

```

## API Structure

Endpoint ready to use

```
GET   /videos            #Get All Videos
GET   /:id/video         #Get Video by Id
POST  /:id/saveVideos    #Post Videos
GET   /:id/getProduct    #Get  Product
GET   /:id/getComment    #Get  Comment
POST  /:id/postComment   #Post Comment

```

## Database Structure

### Videos Collection

```
  {
    videos: [
        _id             : String
        titleVideo : String
        linkVideo  : String 
        thumbnailVideo : String
    ]
    }
 ```

 ### Comment Collection

 ```

    {
    comments: [
        _id             : String
        commentUsername : String
        commentContent  : String 
    ]
    }

 ```

 ### Product Collection

 ```

 {
    products: [
       _id             : String
        productName    : String
        price          : number
        store          : string 
    ]
    }


 ```