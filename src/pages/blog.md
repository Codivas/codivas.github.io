---
title: Blog
description: 'All blog posts can be found here'
layout: blog
pagination:
  data: collections.allPosts
  size: 6
permalink: 'blog/{% if pagination.pageNumber >=1  %}page-{{ pagination.pageNumber + 1 }}/{% endif %}index.html'
---



Este blog tem uma paginação de **{{ pagination.size }}** posts por página.
A paginação só é mostrada se houver mais posts ({{ collections.posts.length }}) do que itens por página ({{ pagination.size }}).
