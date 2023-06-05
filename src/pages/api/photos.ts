import { UnsplashAPI } from '@/utils/unsplash';

export default async function handler(req, res) {
  // const { page, per_page, order_by } = req.query;
  
  // const api = new UnsplashAPI();
  // const { data, status } = await api.getPhotos({ page, per_page, order_by });

  // res.status(status).json(data);
  res.status(200).json(exampleData);
}

const exampleData = [
  {
    "id": "LBI7cgq3pbM",
    "created_at": "2016-05-03T11:00:28-04:00",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "width": 5245,
    "height": 3497,
    "color": "#60544D",
    "blur_hash": "LoC%a7IoIVxZ_NM|M{s:%hRjWAo0",
    "likes": 12,
    "liked_by_user": false,
    "description": "A man drinking a coffee.",
    "user": {
      "id": "pXhwzz1JtQU",
      "username": "poorkane",
      "name": "Gilbert Kane",
      "portfolio_url": "https://theylooklikeeggsorsomething.com/",
      "bio": "XO",
      "location": "Way out there",
      "total_likes": 5,
      "total_photos": 74,
      "total_collections": 52,
      "instagram_username": "instantgrammer",
      "twitter_username": "crew",
      "profile_image": {
        "small": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128"
      },
      "links": {
        "self": "https://api.unsplash.com/users/poorkane",
        "html": "https://unsplash.com/poorkane",
        "photos": "https://api.unsplash.com/users/poorkane/photos",
        "likes": "https://api.unsplash.com/users/poorkane/likes",
        "portfolio": "https://api.unsplash.com/users/poorkane/portfolio"
      }
    },
    "current_user_collections": [
      {
        "id": 206,
        "title": "Makers: Cat and Ben",
        "published_at": "2016-01-12T18:16:09-05:00",
        "last_collected_at": "2016-06-02T13:10:03-04:00",
        "updated_at": "2016-07-10T11:00:01-05:00",
        "cover_photo": null,
        "user": null
      },
    ],
    "urls": {
      "raw": "https://images.unsplash.com/photo-1682687220247-9f786e34d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTUzNDQ2NXw&ixlib=rb-4.0.3&q=80&w=1080",
      "full": "https://images.unsplash.com/photo-1682687220247-9f786e34d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTUzNDQ2NXw&ixlib=rb-4.0.3&q=80&w=1080",
      "regular": "https://images.unsplash.com/photo-1682687220247-9f786e34d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTUzNDQ2NXw&ixlib=rb-4.0.3&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1682687220247-9f786e34d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTUzNDQ2NXw&ixlib=rb-4.0.3&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1682687220247-9f786e34d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTUzNDQ2NXw&ixlib=rb-4.0.3&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/LBI7cgq3pbM",
      "html": "https://unsplash.com/photos/LBI7cgq3pbM",
      "download": "https://unsplash.com/photos/LBI7cgq3pbM/download",
      "download_location": "https://api.unsplash.com/photos/LBI7cgq3pbM/download"
    }
  },
  {
    "id": "stefuijlko;",
    "created_at": "2016-05-03T11:00:28-04:00",
    "updated_at": "2016-07-10T11:00:01-05:00",
    "width": 5245,
    "height": 3497,
    "color": "#60544D",
    "blur_hash": "LoC%a7IoIVxZ_NM|M{s:%hRjWAo0",
    "likes": 12,
    "liked_by_user": false,
    "description": "A man drinking a coffee.",
    "user": {
      "id": "pXhwzz1JtQU",
      "username": "poorkane",
      "name": "Gilbert Kane",
      "portfolio_url": "https://theylooklikeeggsorsomething.com/",
      "bio": "XO",
      "location": "Way out there",
      "total_likes": 5,
      "total_photos": 74,
      "total_collections": 52,
      "instagram_username": "instantgrammer",
      "twitter_username": "crew",
      "profile_image": {
        "small": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=32&w=32",
        "medium": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=64&w=64",
        "large": "https://images.unsplash.com/face-springmorning.jpg?q=80&fm=jpg&crop=faces&fit=crop&h=128&w=128"
      },
      "links": {
        "self": "https://api.unsplash.com/users/poorkane",
        "html": "https://unsplash.com/poorkane",
        "photos": "https://api.unsplash.com/users/poorkane/photos",
        "likes": "https://api.unsplash.com/users/poorkane/likes",
        "portfolio": "https://api.unsplash.com/users/poorkane/portfolio"
      }
    },
    "current_user_collections": [
      {
        "id": 206,
        "title": "Makers: Cat and Ben",
        "published_at": "2016-01-12T18:16:09-05:00",
        "last_collected_at": "2016-06-02T13:10:03-04:00",
        "updated_at": "2016-07-10T11:00:01-05:00",
        "cover_photo": null,
        "user": null
      },
    ],
    "urls": {
      "raw": "https://images.unsplash.com/photo-1682687220247-9f786e34d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTUzNDQ2NXw&ixlib=rb-4.0.3&q=80&w=1080",
      "full": "https://images.unsplash.com/photo-1682687220247-9f786e34d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTUzNDQ2NXw&ixlib=rb-4.0.3&q=80&w=1080",
      "regular": "https://images.unsplash.com/photo-1682687220247-9f786e34d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTUzNDQ2NXw&ixlib=rb-4.0.3&q=80&w=1080",
      "small": "https://images.unsplash.com/photo-1682687220247-9f786e34d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTUzNDQ2NXw&ixlib=rb-4.0.3&q=80&w=400",
      "thumb": "https://images.unsplash.com/photo-1682687220247-9f786e34d472?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTUzNDQ2NXw&ixlib=rb-4.0.3&q=80&w=200"
    },
    "links": {
      "self": "https://api.unsplash.com/photos/LBI7cgq3pbM",
      "html": "https://unsplash.com/photos/LBI7cgq3pbM",
      "download": "https://unsplash.com/photos/LBI7cgq3pbM/download",
      "download_location": "https://api.unsplash.com/photos/LBI7cgq3pbM/download"
    }
  },
]
