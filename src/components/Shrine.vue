<template>
    <div class="home">
        <aside class="mdc-drawer shrine-drawer">
            <div class="mdc-drawer__header">
                <svg class="shrine-logo-drawer" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
         width="48px" height="48px" viewBox="0 0 24 24" enable-background="new 0 0 24 24" xml:space="preserve" fill="#000000" focusable="false">
        <g>
          <g>
            <path d="M17,2H7L2,6.62L12,22L22,6.62L17,2z M16.5,3.58l3.16,2.92H16.5V3.58z M7.59,3.5H15v3H4.34L7.59,3.5z
               M11.25,18.1L7.94,13h3.31V18.1z M11.25,11.5H6.96L4.69,8h6.56V11.5z M16.5,12.32 M12.75,18.09V8h6.56L12.75,18.09z"></path>
          </g>
            <rect fill="none" width="24" height="24"></rect>
        </g>
      </svg>
                <h1 class="shrine-title">SHRINE</h1>
            </div>
            <div class="mdc-drawer__content">
                <nav class="mdc-list">
                    <a class="mdc-list-item mdc-list-item--activated" aria-selected="true" href="#">
                        Featured
                    </a>
                    <li class="shrine-select-item-divider mdc-list-divider" role="separator"></li>
                    <a class="mdc-list-item" href="#">
                        Apartment
                    </a>
                    <a class="mdc-list-item" href="#">
                        Accessories
                    </a>
                    <a class="mdc-list-item" href="#">
                        Shoes
                    </a>
                    <a class="mdc-list-item" href="#">
                        Tops
                    </a>
                    <a class="mdc-list-item" href="#">
                        Bottoms
                    </a>
                    <a class="mdc-list-item" href="#">
                        Dresses
                    </a>
                    <a class="mdc-list-item" href="#">
                        My Account
                    </a>
                </nav>
            </div>
        </aside>
        <div class="shrine-body">
            <ul class="mdc-image-list mdc-image-list--masonry product-list">
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/ginger-scarf.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Ginger scarf</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/blue-stone-mug.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Blue stone mug</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/cerise-scallop.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Cerise scallop tee</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/chambray-napkins.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Chambray napkins</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/fine-lines.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Fine lines tee</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/garden-strand.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Garden strand</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/gatsby-hat.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Gatsby hat</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/gilt-desk-trio.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Gilt desk trio</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/kitchen-quattro.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Kitchen quattro</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/seabreeze-sweater.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Seabreeze sweater</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/shrug-bag.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Shrug bag</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/stella-sunglasses.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Stella sunglasses</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/surf-and-perf.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Surf and perf shirt</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/vagabond-sack.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Vagabond sack</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/walter-henley.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Walter henley (white)</span>
                    </div>
                </li>
                <li class="mdc-image-list__item">
                    <img class="mdc-image-list__image" src="@/assets/weave-keyring.jpg">
                    <div class="mdc-image-list__supporting">
                        <span class="mdc-image-list__label">Weave keyring</span>
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
    import {MDCList} from '@material/list';

    export default {
        name: 'Shrine',
        mounted: function () {
            new MDCList(document.querySelector('.mdc-list'));
        }
    }
</script>

<style scoped lang="scss">

    $mdc-theme-primary: #FEDBD0;
    $mdc-theme-on-primary: #442C2E;
    $mdc-theme-secondary: #FEEAE6;
    $mdc-theme-on-secondary: #442C2E;
    $mdc-theme-surface: #FFFBFA;
    $mdc-theme-on-surface: #442C2E;
    $mdc-theme-background: #FFFFFF;
    $mdc-theme-on-background: #442C2E;

    @import "~@material/drawer/mdc-drawer";
    @import "~@material/list/mdc-list";
    @import "~@material/image-list/mdc-image-list";
    @import "~@material/ripple/mixins";
    @import "~@material/typography/mdc-typography";
    @import "~@material/elevation/mdc-elevation";

    .shrine-logo-drawer {
        display: block;
        width: 48px;
        padding: 40px 0 0;
        margin: 0 auto;
        fill: currentColor;
    }

    .shrine-title {
        @include mdc-typography(headline6);

        text-align: center;
        margin: 5px auto;
    }

    .product-list {
        @include mdc-image-list-masonry-columns(4);

        overflow: auto;
        padding: 80px 100px 0;

        .mdc-image-list__supporting {
            justify-content: center;
        }

        .mdc-image-list__item {
            padding: 10px;
        }

        .mdc-image-list__label {
            @include mdc-typography(subtitle2);
        }

    }

    .shrine-drawer {
        @include mdc-drawer-fill-color-accessible(primary);
        @include mdc-drawer-z-index(0);

        text-transform: uppercase;

        .mdc-list {
            margin: 70px 5px auto 5px;
        }

        .mdc-list-item {
            border-radius: 6px;
            justify-content: center;
        }

        .mdc-list .mdc-list-item {
            @include mdc-states-activated(#fff);
        }

    }

    .shrine-select-item-divider {
        display: block;
        border-bottom-color: #EAA4A4;
        border-bottom-width: 2px;
        width: 50px;
        position: relative;
        top: -8px;
    }

    .shrine-drawer .shrine-select-item-divider {
        margin: 0 auto;
    }

    .shrine-body {
        @include mdc-elevation(4);

        display: block;
        overflow: auto;
        z-index: 0;
    }
</style>
