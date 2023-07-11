<script>
    import {WHATSAPP_URL} from "./consts";
    import WhatsAppImage from "../../assets/WhatsApp.svg";
</script>

<a href={WHATSAPP_URL} target="_blank">
    <img src={WhatsAppImage} alt="WA"/>
</a>

<style>
    a {
        position: fixed;
        bottom: -10px;
        right: 0;

        display: inline-block;
        padding: 20px;

        color: #fff;

        text-decoration: none;

        cursor: pointer;
    }

    img {
        height: 60px;
        width: 60px;
    }
</style>