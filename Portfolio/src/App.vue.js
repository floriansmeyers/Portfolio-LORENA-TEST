import Footer from '../components/Footer.vue';
import Navigatie from '../components/Navigatie.vue';
import Header from '../components/Header.vue';
import Section from '../components/Section.vue';
import Content from '../components/Content.vue';
import Card from '../components/Card.vue';
import BackButton from '../components/BackButton.vue';
import ContactCard from '../components/ContactCard.vue';
export default (await import('vue')).defineComponent({
    name: 'App',
    components: {
        Navigatie,
        Footer,
        Header,
        Section,
        Content,
        Card,
        BackButton,
        ContactCard
    },
    data() {
        return {
            Header,
            Content,
            Card,
        };
    },
});
const __VLS_ctx = {};
const __VLS_componentsOption = {
    Navigatie,
    Footer,
    Header,
    Section,
    Content,
    Card,
    BackButton,
    ContactCard
};
let __VLS_components;
let __VLS_directives;
// CSS variable injection 
// CSS variable injection end 
__VLS_asFunctionalElement(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({
    id: "app",
});
__VLS_asFunctionalElement(__VLS_intrinsicElements.body, __VLS_intrinsicElements.body)({});
const __VLS_0 = {}.Navigatie;
/** @type {[typeof __VLS_components.Navigatie, ]} */ ;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({}));
const __VLS_2 = __VLS_1({}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const __VLS_4 = {}.BackButton;
/** @type {[typeof __VLS_components.BackButton, ]} */ ;
// @ts-ignore
const __VLS_5 = __VLS_asFunctionalComponent(__VLS_4, new __VLS_4({}));
const __VLS_6 = __VLS_5({}, ...__VLS_functionalComponentArgsRest(__VLS_5));
const __VLS_8 = {}.RouterView;
/** @type {[typeof __VLS_components.RouterView, ]} */ ;
// @ts-ignore
const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({}));
const __VLS_10 = __VLS_9({}, ...__VLS_functionalComponentArgsRest(__VLS_9));
const __VLS_12 = {}.Footer;
/** @type {[typeof __VLS_components.Footer, ]} */ ;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent(__VLS_12, new __VLS_12({}));
const __VLS_14 = __VLS_13({}, ...__VLS_functionalComponentArgsRest(__VLS_13));
var __VLS_dollars;
let __VLS_self;
