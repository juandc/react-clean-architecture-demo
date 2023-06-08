import { UnsplashAPI } from '@/utils/unsplash';

export default async function handler(req, res) {
  const { page, per_page, order_by } = req.query;
  
  // const api = new UnsplashAPI();
  // const { data, status } = await api.getPhotos({ page, per_page, order_by });

  // data.results.map(x => console.log(x.created_at))
  
  // res.status(status).json(data.results);
  if (order_by == 'relevant') res.status(200).json(exampleDataRelevant);
  else res.status(200).json(exampleData);
}

const exampleData = [
  {
    id: 'wPVEHAQsYQw',
    slug: 'wPVEHAQsYQw',
    created_at: '2023-01-24T15:30:01Z',
    updated_at: '2023-06-05T13:10:31Z',
    promoted_at: null,
    width: 8192,
    height: 5464,
    color: '#f3f3f3',
    blur_hash: 'LeKmL~~XE0q|E39ZsXx]IYj?tkX5',
    description: null,
    alt_description: 'a couple of people standing next to each other',
    urls: {
      raw: 'https://images.unsplash.com/photo-1674574124475-16dd78234342?ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1674574124475-16dd78234342?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=85',
      regular: 'https://images.unsplash.com/photo-1674574124475-16dd78234342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
      small: 'https://images.unsplash.com/photo-1674574124475-16dd78234342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=400',
      thumb: 'https://images.unsplash.com/photo-1674574124475-16dd78234342?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHwxfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1674574124475-16dd78234342'
    },
    likes: 47,
    liked_by_user: false,
    current_user_collections: [],
    topic_submissions: {},
  },
  {
    id: 'cGJRkeAz-tc',
    slug: 'cGJRkeAz-tc',
    created_at: '2023-06-05T07:41:44Z',
    updated_at: '2023-06-05T17:08:01Z',
    promoted_at: '2023-06-05T17:08:01Z',
    width: 4169,
    height: 6254,
    color: '#d9d9d9',
    blur_hash: 'LXNJn4xa.Sae*0a|flkC?aWBIAjY',
    description: null,
    alt_description: 'a woman with butterflies painted on her body',
    urls: {
      raw: 'https://images.unsplash.com/photo-1685950871149-b2cee6808f27?ixid=M3w0NTUxMTN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1685950871149-b2cee6808f27?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=85',
      regular: 'https://images.unsplash.com/photo-1685950871149-b2cee6808f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
      small: 'https://images.unsplash.com/photo-1685950871149-b2cee6808f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=400',
      thumb: 'https://images.unsplash.com/photo-1685950871149-b2cee6808f27?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwyfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685950871149-b2cee6808f27'
    },
    likes: 4,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
  },
  {
    id: 'r7C7Mo79Lws',
    slug: 'r7C7Mo79Lws',
    created_at: '2023-05-29T06:50:42Z',
    updated_at: '2023-06-05T17:00:01Z',
    promoted_at: '2023-06-05T17:00:01Z',
    width: 4160,
    height: 5669,
    color: '#f38c73',
    blur_hash: 'L9TEnWsF#R$juhf9i_ja%1n5IpR,',
    description: 'La Muralla Roja - postmodern architecture',
    alt_description: 'a person walking up a set of stairs',
    urls: {
      raw: 'https://images.unsplash.com/photo-1685342413012-7e6a9c81a4a7?ixid=M3w0NTUxMTN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1685342413012-7e6a9c81a4a7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=85',
      regular: 'https://images.unsplash.com/photo-1685342413012-7e6a9c81a4a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
      small: 'https://images.unsplash.com/photo-1685342413012-7e6a9c81a4a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=400',
      thumb: 'https://images.unsplash.com/photo-1685342413012-7e6a9c81a4a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwzfHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685342413012-7e6a9c81a4a7'
    },
    likes: 21,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
  },
  {
    id: '6Xo7DBaDXRs',
    slug: '6Xo7DBaDXRs',
    created_at: '2023-06-04T17:39:48Z',
    updated_at: '2023-06-05T16:56:01Z',
    promoted_at: '2023-06-05T16:56:01Z',
    width: 6000,
    height: 4000,
    color: '#26260c',
    blur_hash: 'L67KC-S#0eJ6JPoJ-VxaIos:xus.',
    description: null,
    alt_description: 'a person reaching for a flower in a field',
    urls: {
      raw: 'https://images.unsplash.com/photo-1685900337313-64cd27f0238e?ixid=M3w0NTUxMTN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1685900337313-64cd27f0238e?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=85',
      regular: 'https://images.unsplash.com/photo-1685900337313-64cd27f0238e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
      small: 'https://images.unsplash.com/photo-1685900337313-64cd27f0238e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=400',
      thumb: 'https://images.unsplash.com/photo-1685900337313-64cd27f0238e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw0fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685900337313-64cd27f0238e'
    },
    likes: 0,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
  },
  {
    id: 'deZagmunsRo',
    slug: 'deZagmunsRo',
    created_at: '2023-06-04T10:48:55Z',
    updated_at: '2023-06-05T16:40:01Z',
    promoted_at: '2023-06-05T16:40:01Z',
    width: 5504,
    height: 8256,
    color: '#f3f3f3',
    blur_hash: 'LaK,?T%LInNZ_4S4RiWV.8NYnjt6',
    description: null,
    alt_description: 'a bush of lilacs in full bloom on a sunny day',
    urls: {
      raw: 'https://images.unsplash.com/photo-1685875673516-6559ff4289c5?ixid=M3w0NTUxMTN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1685875673516-6559ff4289c5?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=85',
      regular: 'https://images.unsplash.com/photo-1685875673516-6559ff4289c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
      small: 'https://images.unsplash.com/photo-1685875673516-6559ff4289c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=400',
      thumb: 'https://images.unsplash.com/photo-1685875673516-6559ff4289c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw1fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685875673516-6559ff4289c5'
    },
    likes: 6,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
  },
  {
    id: 'G3SoFDDCh0E',
    slug: 'G3SoFDDCh0E',
    created_at: '2023-04-28T13:32:49Z',
    updated_at: '2023-06-05T04:34:50Z',
    promoted_at: null,
    width: 3000,
    height: 4500,
    color: '#735940',
    blur_hash: 'LSGIDc%fEN_2~qxuoz-;OtofxZo#',
    description: 'Date palms in Wadi Sharma, Sharma - NEOM, Saudi Arabia | The NEOM Nature Reserve region is being designed to deliver protection and restoration of biodiversity across 95% of NEOM.',
    alt_description: 'a man standing between palm trees in a desert',
    urls: {
      raw: 'https://images.unsplash.com/photo-1682688759457-52bcb4dc1578?ixid=M3w0NTUxMTN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1682688759457-52bcb4dc1578?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=85',
      regular: 'https://images.unsplash.com/photo-1682688759457-52bcb4dc1578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
      small: 'https://images.unsplash.com/photo-1682688759457-52bcb4dc1578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=400',
      thumb: 'https://images.unsplash.com/photo-1682688759457-52bcb4dc1578?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MXwxfGFsbHw2fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1682688759457-52bcb4dc1578'
    },
    likes: 63,
    liked_by_user: false,
    current_user_collections: [],
    topic_submissions: {},
  },
  {
    id: 'PjkgQp3L3tE',
    slug: 'PjkgQp3L3tE',
    created_at: '2023-06-04T14:54:25Z',
    updated_at: '2023-06-05T16:32:01Z',
    promoted_at: '2023-06-05T16:32:01Z',
    width: 5029,
    height: 3346,
    color: '#262626',
    blur_hash: 'L76tzP-p0L9Zt7oeoKof0KM{?H-;',
    description: 'My Piano Room...',
    alt_description: 'a room with a piano and a chair in it',
    urls: {
      raw: 'https://images.unsplash.com/photo-1685890281564-8281266fd684?ixid=M3w0NTUxMTN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1685890281564-8281266fd684?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=85',
      regular: 'https://images.unsplash.com/photo-1685890281564-8281266fd684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
      small: 'https://images.unsplash.com/photo-1685890281564-8281266fd684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=400',
      thumb: 'https://images.unsplash.com/photo-1685890281564-8281266fd684?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw3fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685890281564-8281266fd684'
    },
    likes: 4,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
  },
  {
    id: '9baSVZWg4qo',
    slug: '9baSVZWg4qo',
    created_at: '2022-07-31T09:36:22Z',
    updated_at: '2023-06-05T17:27:37Z',
    promoted_at: '2023-06-05T16:24:01Z',
    width: 3000,
    height: 3000,
    color: '#d9d9d9',
    blur_hash: 'LNH_[1D*00xt%Nogj[%L9E?IkDRk',
    description: 'CGI : CONCRETE VILLA\n' +
      '3DS MAX | CORONA | PHOTOSHOP\n' +
      '\n' +
      'I wanted to do villa from a long time but this time i sat up and just did it.\n' +
      '\n' +
      "Usually when I do these type of project i find sketches of other artist who makes conceptual houses and go with that because that basically saves time and I love to see those great concept comes to life throve my visuals and there's nothing joyable than that.",
    alt_description: 'a courtyard with a pool and chairs',
    urls: {
      raw: 'https://images.unsplash.com/photo-1659259540528-0240ad70e92a?ixid=M3w0NTUxMTN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1659259540528-0240ad70e92a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=85',
      regular: 'https://images.unsplash.com/photo-1659259540528-0240ad70e92a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
      small: 'https://images.unsplash.com/photo-1659259540528-0240ad70e92a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=400',
      thumb: 'https://images.unsplash.com/photo-1659259540528-0240ad70e92a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw4fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1659259540528-0240ad70e92a'
    },
    likes: 28,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
  },
]

const exampleDataRelevant = [
  {
    id: 'hoHadUJ34Mc',
    slug: 'hoHadUJ34Mc',
    created_at: '2023-06-02T20:10:58Z',
    updated_at: '2023-06-05T14:56:01Z',
    promoted_at: '2023-06-05T14:56:01Z',
    width: 4160,
    height: 5221,
    color: '#c0a6c0',
    blur_hash: 'LHIqQX4,ImEJE1D$ais=D~ob-=-p',
    description: 'La Muralla Roja - postmodern architecture',
    alt_description: 'a person sitting on a bench in front of a purple building',
    urls: {
      raw: 'https://images.unsplash.com/photo-1685728399102-1be0dbcff7aa?ixid=M3w0NTUxMTN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1685728399102-1be0dbcff7aa?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=85',
      regular: 'https://images.unsplash.com/photo-1685728399102-1be0dbcff7aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=1080',
      small: 'https://images.unsplash.com/photo-1685728399102-1be0dbcff7aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=400',
      thumb: 'https://images.unsplash.com/photo-1685728399102-1be0dbcff7aa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHw5fHx8fHx8Mnx8MTY4NTk4NjI0NHw&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685728399102-1be0dbcff7aa'
    },
    likes: 14,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
  },
  {
    id: 'iV8Xy7dD5OQ',
    slug: 'iV8Xy7dD5OQ',
    created_at: '2023-06-02T20:44:49Z',
    updated_at: '2023-06-05T14:48:01Z',
    promoted_at: '2023-06-05T14:48:01Z',
    width: 4000,
    height: 5000,
    color: '#f3f3f3',
    blur_hash: 'L~JR8TRkM{t7~pWBayaz%MaxoLR*',
    description: 'Belle Ile en mer',
    alt_description: 'a body of water with rocks in the middle of it',
    urls: {
      raw: 'https://images.unsplash.com/photo-1685738538054-9953b5461dba?ixid=M3w0NTUxMTN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODU5ODYyNDR8&ixlib=rb-4.0.3',
      full: 'https://images.unsplash.com/photo-1685738538054-9953b5461dba?crop=entropy&cs=srgb&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODU5ODYyNDR8&ixlib=rb-4.0.3&q=85',
      regular: 'https://images.unsplash.com/photo-1685738538054-9953b5461dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODU5ODYyNDR8&ixlib=rb-4.0.3&q=80&w=1080',
      small: 'https://images.unsplash.com/photo-1685738538054-9953b5461dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODU5ODYyNDR8&ixlib=rb-4.0.3&q=80&w=400',
      thumb: 'https://images.unsplash.com/photo-1685738538054-9953b5461dba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTUxMTN8MHwxfGFsbHwxMHx8fHx8fDJ8fDE2ODU5ODYyNDR8&ixlib=rb-4.0.3&q=80&w=200',
      small_s3: 'https://s3.us-west-2.amazonaws.com/images.unsplash.com/small/photo-1685738538054-9953b5461dba'
    },
    likes: 15,
    liked_by_user: false,
    current_user_collections: [],
    sponsorship: null,
    topic_submissions: {},
  }
]
