# Library App

This project is a simple React application that includes a book search and presentation app. The application is built using different pages and components.

## Home Page

The home page allows users to search for and list books. Users can enter a search query and select a book type. Upon submitting the form, the application sends a request to the Google Books API and retrieves book data, which is then displayed on the page using the `Card` components.

## About Page

The about page provides information about the user. It displays the user's profile picture, name, and information about their Frontend development skills. Additionally, the page contains icons that link to the user's social media profiles.

## Detail Page

The detail page shows detailed information about a selected book. The application retrieves the book data from the home page using the `useLocation` hook and displays details such as the book title, cover image, description, authors, publication date, and publisher.

## Register Page

The register page contains a component that is still under development. It currently displays an image indicating that the page is under construction. The full functionality of this page will be implemented in future stages.

## Login Page

The login page allows users to log in to the application. Users can enter their username and password to log in. Upon submitting the form, the username is set using the `setCurrentUser` function and saved to the browser's session storage. After successful login, users are redirected to the home page.

## Steps to Solution

- Step 1: We create React App using `yarn create react-app library`or `npx create-react-app library`

- Step 2: We go to `https://developers.google.com/books/docs/v1/using?hl=tr` and get api key.

- Step 3 : We use api key and `axios` to get data from `https://www.googleapis.com/books/v1/volumes?q=${query}&printType=${printType}&key=${APP_KEY}`.

- Step 4: We code your project with **styled component**

- Step 5 : We can get random input background image from `https://picsum.photos/1600/900`

## Google Books API

<a href="https://developers.google.com/books/docs/v1/using" target="_blank">Google Books API</a>

---

# Kütüphane Uygulaması

Bu proje, kitap arama ve tanıtım uygulamasını içeren basit bir React uygulamasıdır. Uygulama, farklı sayfalar ve bileşenler kullanılarak oluşturulmuştur.

## Ana Sayfa (Home)

Ana sayfa, kullanıcının kitapları arayıp listeleyebileceği bölümdür. Kullanıcı, arama sorgusu ve kitap türü seçimi yapabilir. Ardından, Google Books API'si kullanılarak yapılan istekle, kitap verileri alınır ve ekranda `Card` bileşenleri aracılığıyla listelenir.

## Hakkında Sayfası (About)

Hakkında sayfası, kullanıcının kendisi hakkında bilgi verdiği bölümdür. Sayfada kullanıcının profil resmi, adı ve Frontend geliştirme konusundaki bilgi ve becerileri sıralanır. Ayrıca kullanıcının sosyal medya hesaplarına yönlendiren simgeler bulunur.

## Detay Sayfası (Detail)

Detay sayfası, seçilen kitabın detaylarını gösterdiği bölümdür. Ana sayfadan seçilen kitap verileri, `useLocation` hook'u kullanılarak alınır ve kitabın adı, resmi, açıklaması, yazarları, yayın tarihi ve yayıncısı gibi detaylar gösterilir.

## Kayıt Sayfası (Register)

Kayıt sayfası, henüz tamamlanmamış bir bileşeni içerir. Bu sayfada sadece bir yapımda olduğu belirten bir resim gösterilir. Tam işlevselliği ileriki aşamalarda eklenmelidir.

## Giriş Sayfası (Login)

Giriş sayfası, kullanıcıların sisteme giriş yapabileceği bölümdür. Kullanıcı adı ve şifre girerek giriş yapabilir. Form gönderildiğinde, kullanıcı adı `setCurrentUser` fonksiyonu aracılığıyla ayarlanır ve tarayıcı oturum hafızasına (`sessionStorage`) kaydedilir. Başarılı girişin ardından kullanıcı ana sayfaya yönlendirilir.

---

