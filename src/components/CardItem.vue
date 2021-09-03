<template>
    <div class="cart__item">
        <div class="cart__row">
            <div class="cart__image">
                <router-link :to="{ name: 'Product', params: { id: item.id } }" class="cart__image-link"><img :src="require(`../assets/img/slider/${item.id}.jpg`)" alt="" class="cart__image-img"/></router-link>
            </div>
            <div class="cart__details">
                <h5 class="cart__details-h5">
                    <router-link :to="{ name: 'Product', params: { id: item.id } }" target="_blank" class="cart__details-link">{{ item.name }}</router-link>
                </h5>
                <div class="cart__deatils-features">تعداد: {{ item.quantity }}</div>
                <div class="cart__deatils-code">کد :{{ item.id }}</div>
            </div>
            <div class="cart__amounts">
                <div class="cart__amounts-div">
                    <input type="number" v-model.number="quantity" @input="addQuantity({product:item,quantity})" class="txt" placeholder="تعداد" max="1000" min="1" />
                    <div class="cart__amounts-price">
                        <span>{{ formattedPrice(item.price) }} تومان</span>
                    </div>
                    <!-- <button type="button" class="btn btn--brand btn--boxshadow" @click="addQuantity({product:item,quantity})">اضافه به تعداد خرید</button> -->
                    <button type="button" @click="deleteItem(item)" class="btn cart__amounts-remove">حذف</button>
                </div>
            </div>
            <div class="cart__total">
                <div class="cart__total-div">
                    <h6 class="cart__total-title">جمع</h6>
                    {{ formattedPrice(item.price * item.quantity) }} تومان
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {mapActions} from 'vuex'
export default {
    name: 'cardItem',
    data() {
        return {
            quantity:this.item.quantity
        }
    },
    props:{
        item:{
            type:Object,
            required:true
        }
    },
    methods:{
        formattedPrice(price){
            return new Intl.NumberFormat('ar-EG').format(price)
        },
        ...mapActions('card',['addQuantity','deleteItem'])
    }
};
</script>
