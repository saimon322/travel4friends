<?php

get_header();

while (have_posts()) :
    the_post();

endwhile; // End of the loop.

get_footer();
