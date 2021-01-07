Hey <?php echo $user->display_name; ?>!

<?php echo $blueprint->reply->user->display_name; ?> replied to your post (#<?php echo $blueprint->post->number; ?>) in <?php echo $blueprint->post->discussion->title; ?>.

<?php echo app()->url(); ?>/d/<?php echo $blueprint->reply->discussion_id; ?>/<?php echo $blueprint->reply->number; ?>


---

<?php echo $blueprint->reply->content; ?>

