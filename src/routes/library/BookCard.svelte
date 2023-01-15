<script lang="ts">

</script>

<div class="library">
    <div class="row">
      <img src="book1.jpg" alt="Book 1">
      <img src="book2.jpg" alt="Book 2">
      <img src="book3.jpg" alt="Book 3">
      <img src="book4.jpg" alt="Book 4">
      <img src="book5.jpg" alt="Book 5">
    </div>
    <div class="row">
      <img src="book6.jpg" alt="Book 6">
      <img src="book7.jpg" alt="Book 7">
      <img src="book8.jpg" alt="Book 8">
      <img src="book9.jpg" alt="Book 9">
      <img src="book10.jpg" alt="Book 10">
    </div>
  </div>
  <style>
    .library {
        display: flex;
        flex-direction: column;
        border-radius: 2px solid #323232;
        flex-wrap: wrap; 
        grid-gap:2rem;
        gap:1rem;
    }   

    .row {
        display: flex;
        justify-content:space-between; 
        text-align: center;
        grid-gap: 2rem
    }

    img {
        display: flex;
        flex-direction: column;
        border: 1px solid var(--app-foreground-color);
        border-radius: 5px;
        padding: 50px 20px 10px;
        gap: 50px;
        width: 20%; 
        height: 50px; 
    }

  </style>
  