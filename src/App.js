// src/App.js
import React, { useState } from 'react';
import Greeting from './Greeting';
import List from './List';
import Form from './Form';
import Counter from './Counter';
import ProductCard from './ProductCard';
import IntervalTimer from './IntervalTimer';
import NavigationMenu from './NavigationMenu';
import Modal from './Modal';
import Table from './Table';
import Filter from './Filter';
import Comments from './Comments';
import Gallery from './Gallery';
import Pagination from './Pagination';
import Tabs from './Tabs';
import Calculator from './Calculator';
import AnimatedBanner from './AnimatedBanner';
import Carousel from './Carousel';
import ContactForm from './ContactForm';
import Geolocation from './Geolocation';
import './Modal.css'; // Импорт стилей модального окна

function App() {
  const myName = 'Ваше имя'; // Замените на ваше имя
  const myList = ['Элемент 1', 'Элемент 2', 'Элемент 3']; // Замените на свой список

  const handleFormSubmit = (text) => {
    // Ваша логика обработки отправки формы, например, добавление текста в список
    console.log('Текст из формы:', text);
  };

  const productData = {
    name: 'Пример товара',
    price: '$19.99',
    description: 'Описание товара здесь...',
  };

  const tableData = [
    { column1: 'Значение 1-1', column2: 'Значение 1-2', column3: 'Значение 1-3' },
    { column1: 'Значение 2-1', column2: 'Значение 2-2', column3: 'Значение 2-3' },
    { column1: 'Значение 3-1', column2: 'Значение 3-2', column3: 'Значение 3-3' },
    // Добавьте дополнительные строки данных по необходимости
  ];

  const [isModalVisible, setModalVisible] = useState(false);
  const [filteredData, setFilteredData] = useState(tableData);

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
  };

  const handleFilterChange = (filterValue) => {
    // Ваша логика фильтрации данных
    const filteredRows = tableData.filter((row) =>
      Object.values(row).some((value) =>
        value.toString().toLowerCase().includes(filterValue.toLowerCase())
      )
    );
    setFilteredData(filteredRows);
  };

  const galleryImages = [
    'https://steemitimages.com/DQmQBE92A5nUa3eVG9gSzGhXDUSN5EN9JQ85rLEPoD53m7z/Are-auto-trading-robots-a-good-idea.jpg',
    'https://steemitimages.com/DQmQBE92A5nUa3eVG9gSzGhXDUSN5EN9JQ85rLEPoD53m7z/Are-auto-trading-robots-a-good-idea.jpg',
    'https://steemitimages.com/DQmQBE92A5nUa3eVG9gSzGhXDUSN5EN9JQ85rLEPoD53m7z/Are-auto-trading-robots-a-good-idea.jpg',
    // Добавьте дополнительные ссылки на изображения по необходимости
  ];

  const comments = [
    'Комментарий 1',
    'Комментарий 2',
    'Комментарий 3',
    // Добавьте дополнительные комментарии по необходимости
  ];

  const itemsPerPage = 3;
  const [currentPageData, setCurrentPageData] = useState(comments.slice(0, itemsPerPage));

  const handlePageChange = (page) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentPageData(comments.slice(startIndex, endIndex));
  };

  const carouselImages = [
    'https://placekitten.com/800/400',
    'https://placekitten.com/801/400',
    'https://placekitten.com/802/400',
    // Добавьте дополнительные ссылки на изображения по необходимости
  ];

  const tabs = [
    {
      label: 'Таблица',
      content: <Table data={filteredData} />,
    },
    {
      label: 'Комментарии',
      content: (
        <div>
          <Comments />
          <Pagination totalItems={comments.length} itemsPerPage={itemsPerPage} onPageChange={handlePageChange} />
          <div>
            <h2>Текущая страница комментариев</h2>
            <ul>
              {currentPageData.map((comment, index) => (
                <li key={index}>{comment}</li>
              ))}
            </ul>
          </div>
        </div>
      ),
    },
    {
      label: 'Галерея',
      content: <Gallery images={galleryImages} />,
    },
    {
      label: 'Калькулятор',
      content: <Calculator />,
    },
    {
      label: 'Анимированный баннер',
      content: <AnimatedBanner />,
    },
    {
      label: 'Карусель',
      content: <Carousel images={carouselImages} />,
    },
    {
      label: 'Контактная форма',
      content: <ContactForm />,
    },
    {
      label: 'Геолокация',
      content: <Geolocation />,
    },
  ];

  return (
    <div className="App">
      <Greeting name={myName} />
      <List items={myList} />
      <Form onSubmit={handleFormSubmit} />
      <Counter />
      <ProductCard {...productData} />
      <IntervalTimer />
      <NavigationMenu />
      <button onClick={openModal}>Показать модальное окно</button>
      <Modal showModal={isModalVisible} onClose={closeModal} />
      <Filter onFilterChange={handleFilterChange} />
      <Tabs tabs={tabs} />
    </div>
  );
}

export default App;
