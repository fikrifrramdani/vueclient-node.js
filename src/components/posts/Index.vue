<template>
  <div>
    <div class="row">
      <div class="col-md-6">
        <div class="input-group mb-3">
          <input type="text" class="form-control" />
          <div class="input-group-append">
            <button class="btn btn-outline-secondary" type="button">Search</button>
          </div>
        </div>
      </div>
    </div>

    <div class="row">
      <div class="col-md-8">
        <h4>Post List</h4>
        <div class="card mb-3">
          <div class="card-body">
            <h5 class="card-title">Post Title</h5>
            <p class="card-text">Description</p>
            <a href="#" class="card-link">Edit</a>
          </div>
        </div>

        <button class="btn btn-sm btn-danger m3">Remove All</button>
      </div>
    </div>
  </div>
</template>
