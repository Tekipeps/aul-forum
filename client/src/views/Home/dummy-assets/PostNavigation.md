## An explanation of the routes in the [posts navigation](../PostNavigation.tsx)

This features dont have to be worked on now. This is just a guide about their implementations

## Most recent

sorts the posts array in order of their timestamps and indexes the newest posts first (cannot return null)

## Trending

sorts the posts array in order of which has had the most views in the past 24 hours, this implies that each view action requires a timestamp (cannot return null)

## Most popular

sorts the posts array in the order of which has had the most views. (cannot return null)

## Followed posts

filters the posts array and returns posts that have been starred by the user in the order of when they were starred (returns null if the user has never starred a post)

## My posts

filters the posts array and returns all posts whose author ID matches that of the current user in the order of when they were created by the user(returns null if the user has never created a post)

## My contributions

filters the posts array and returns all posts that have been commented on by the user in the order of when they were commented on(returns null if the user has never commented on a post)

## Search Bar(most complex feature)

filters the posts array and returns posts that match the search criteria.
Has an additional feature that recognizes a date as input(e.g Yesterday, Today, 3/3/2020, February)

### Mikel solomon-> returns all posts by mikel solomon

### Endsars-> posts with topics or tags involving endsars

### March-> returns posts created in march

There can be multiple conflicting results.
An input 'march' could have posts involving topics/tags or users named march, so does it return posts made in march first or posts involving topics/tags or users named march? To solve this... the search result should be sorted in order of popularity.
So "mike solomon" would return the most viewed posts with topics/tags/users involving that pattern. Dates are ignored since the pattern does not identify as a date

# implementations can be changed, this is only a guideline not a rule book.
