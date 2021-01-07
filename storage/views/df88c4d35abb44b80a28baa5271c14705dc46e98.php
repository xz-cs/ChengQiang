Hey <?php echo $user->display_name; ?>!

<?php echo $blueprint->post->user->display_name; ?> mentioned you in a post in <?php echo $blueprint->post->discussion->title; ?>.

<?php echo app()->url(); ?>/d/<?php echo $blueprint->post->discussion_id; ?>/<?php echo $blueprint->post->number; ?>


---

<?php echo $blueprint->post->content; ?>

