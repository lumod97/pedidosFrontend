<template>
    <div class="h-100">
        <slot name="off-canvas">
            
        </slot>
        <slot name="navbar">

        </slot>
        <div class="container-fluid pt-3 container-content">
            <slot name="content">
            </slot>
        </div>
    </div>
</template>