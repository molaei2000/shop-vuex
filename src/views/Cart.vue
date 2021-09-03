<template>
    <main class="main">
        <div class="container">
            <div class="cart">
                <h1 class="cart__title">سبد خرید</h1>
                <form action.prevent>
                    <div v-if="items.length < 1">
                        <p>
                            <b>سبد شما خالی است</b>
                            <br />
                            <router-link :to="{ name: 'Category' }">برو به سبد خرید</router-link>
                        </p>
                    </div>
                    <CardItem v-for="item in items" :key="item.id" :item="item" />
                </form>
                <div class="cart__info">
                    <div class="cart__coupon">
                        <form action="">
                            <div class="cart__coupon-div">
                                <input type="text" placeholder="کوپن خود را بنویسد" class="cart__coupon-input" />
                                <button class="btn-coupon">اعمال</button>
                            </div>
                        </form>
                    </div>
                    <div class="cart__table">
                        <table>
                            <tbody>
                                <tr>
                                    <th>جمع کل</th>
                                    <td>{{formattedPrice(subtotal)}} تومان</td>
                                </tr>
                                <tr>
                                    <th>مالیات</th>
                                    <td>{{formattedPrice(tax)}} تومان</td>
                                </tr>
                                <tr>
                                    <th>تخفیف</th>
                                    <td class="text-red">0 تومان</td>
                                </tr>
                                <tr>
                                    <th>قابل پرداخت</th>
                                    <td class="text-blue">{{formattedPrice(total)}} تومان</td>
                                </tr>
                            </tbody>
                        </table>
                        <button class="btn btn--brand btn--boxshadow">ثبت سفارش</button>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
import CardItem from '@/components/CardItem';

import { mapState,mapGetters } from 'vuex';

export default {
    components: {
        CardItem,
    },
    computed: {
        ...mapState('card', ['items']),
        ...mapGetters('card',['subtotal','total','tax'])
    },
    methods: {
        formattedPrice(price){
            return new Intl.NumberFormat('ar-EG').format(price)
        },
    },
};
</script>

<style></style>
