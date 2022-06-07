<template>
    <div class="entry-container mb-3 pointer p-2">

        <div class="entry-title d-flex">
            <span class="text-success fs-5 fw-bold">15</span>
            <span class="mx-1 fs-5">Julio</span>
            <span class="mx-2 fw-light">2022, Viernes</span>
        </div>

        <div class="entry-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ac ornare arcu, a ullamcorper orci. Integer ac dui eleifend, blandit eros at, dictum magna. Vestibulum eget sodales purus. Phasellus elementum, neque ac consequat dapibus, leo lorem porttitor libero, quis sagittis lacus magna non nunc.
        </div>
    </div>

</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
    border-bottom: 1px solid #2c3e50;
    transition: 0.2s all ease-in;

    &:hover {
        background-color: lighten($color: grey, $amount: 45);
        transition: 0.2s all ease-in;
    }
    .entry-description {
        font-weight: 12px;
    }
}
</style>