import { useMemo, useState } from 'react';

import Stack from '@mui/material/Stack';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import Typography from '@mui/material/Typography';

import { POSTS } from 'src/_mock/blog';

import PostCard from '../post-card';
import PostSort from '../post-sort';
import PostSearch from '../post-search';

// ----------------------------------------------------------------------

export default function BlogView() {
  const [filter, setFilter] = useState('');
  const [sortBy, setSortBy] = useState('latest');

  const posts = useMemo(() => {
    let filteredPosts = [...POSTS];
    if (filter) {
      filteredPosts = filteredPosts.filter((post) =>
        post.title.toLowerCase().includes(filter.toLowerCase())
      );
    }
    if (sortBy === 'latest') {
      filteredPosts = filteredPosts.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    } else if (sortBy === 'popular') {
      filteredPosts = filteredPosts.sort((a, b) => b.view - a.view);
    } else if (sortBy === 'oldest') {
      filteredPosts = filteredPosts.sort((a, b) => new Date(a.createdAt) - new Date(b.createdAt));
    }

    return filteredPosts;
  }, [filter, sortBy]);

  return (
    <Container>
      <Stack direction="row" alignItems="center" justifyContent="space-between" mb={5}>
        <Typography variant="h4">Blog</Typography>
      </Stack>

      <Stack mb={5} direction="row" alignItems="center" justifyContent="space-between">
        <PostSearch posts={posts} filter={filter} onFilter={setFilter} />
        <PostSort
          options={[
            { value: 'latest', label: 'Latest' },
            { value: 'popular', label: 'Popular' },
            { value: 'oldest', label: 'Oldest' },
          ]}
          sortBy={sortBy}
          onSort={(e) => setSortBy(e.target.value)}
        />
      </Stack>

      <Grid container spacing={3}>
        {posts.map((post, index) => (
          <PostCard key={post.id} post={post} index={index} />
        ))}
      </Grid>
    </Container>
  );
}
