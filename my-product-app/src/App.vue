<script setup>
import { ref, computed } from 'vue';

// 1. Mock ข้อมูลเริ่มต้นขึ้นมาเอง
const initialData = [
  { id: 1, title: 'Wireless Noise-Canceling Headphones', price: 99.99, category: 'Electronics', inStock: true },
  { id: 2, title: 'Mechanical Gaming Keyboard RGB', price: 79.50, category: 'Electronics', inStock: true },
  { id: 3, title: 'Ergonomic Office Chair', price: 189.00, category: 'Furniture', inStock: false },
  { id: 4, title: 'Stainless Steel Water Bottle (1L)', price: 24.00, category: 'Accessories', inStock: true },
  { id: 5, title: 'Smart Fitness Watch V2', price: 129.99, category: 'Electronics', inStock: true },
];

const products = ref(initialData);
const search = ref('');
const selectedCategory = ref('All');

// State สำหรับฟอร์มเพิ่มสินค้าใหม่
const newTitle = ref('');
const newPrice = ref('');

// 2. Computed กรองข้อมูลตามทั้งคำค้นหา (Search) และหมวดหมู่ (Category)
const filteredProducts = computed(() => {
  return products.value.filter((item) => {
    const matchesSearch = item.title.toLowerCase().includes(search.value.toLowerCase().trim());
    const matchesCategory = selectedCategory.value === 'All' || item.category === selectedCategory.value;
    return matchesSearch && matchesCategory;
  });
});

// คำนวณมูลค่าสินค้ารวมที่แสดงผลอยู่
const totalPrice = computed(() => {
  return filteredProducts.value.reduce((sum, item) => sum + item.price, 0);
});

// 3. ฟังก์ชันเพิ่มสินค้า (Add)
const handleAddProduct = () => {
  if (!newTitle.value.trim() || !newPrice.value) return;

  const newItem = {
    id: Date.now(), // Generate ID ง่ายๆ
    title: newTitle.value.trim(),
    price: parseFloat(newPrice.value),
    category: 'Electronics',
    inStock: true
  };

  products.value.unshift(newItem); // แทรกขึ้นบนสุด
  newTitle.value = '';
  newPrice.value = '';
};

// 4. ฟังก์ชันลบสินค้า (Delete)
const handleDelete = (id) => {
  products.value = products.value.filter(item => item.id !== id);
};
</script>

<template>
  <div class="container">
    <h2>📦 Product Inventory Management</h2>

    <!-- ฟอร์มเพิ่มสินค้าใหม่ -->
    <form @submit.prevent="handleAddProduct" class="add-form">
      <input v-model="newTitle" placeholder="ชื่อสินค้าใหม่..." required />
      <input v-model="newPrice" type="number" step="0.01" placeholder="ราคา..." required />
      <button type="submit" class="btn-add">+ เพิ่มสินค้า</button>
    </form>

    <!-- เครื่องมือค้นหาและตัวกรอง -->
    <div class="filter-bar">
      <input
        v-model="search"
        type="text"
        placeholder="🔍 ค้นหาชื่อสินค้า..."
        class="search-input"
      />
      <select v-model="selectedCategory" class="category-select">
        <option value="All">ทุกหมวดหมู่</option>
        <option value="Electronics">Electronics</option>
        <option value="Furniture">Furniture</option>
        <option value="Accessories">Accessories</option>
      </select>
    </div>

    <!-- สรุปผล -->
    <div class="summary-text">
      พบทั้งหมด <b>{{ filteredProducts.length }}</b> รายการ | มูลค่ารวม: <b>${{ totalPrice.toFixed(2) }}</b>
    </div>

    <!-- Empty State -->
    <div v-if="filteredProducts.length === 0" class="empty-state">
      ❌ ไม่พบรายการสินค้าที่ตรงกับเงื่อนไข
    </div>

    <!-- รายการสินค้า -->
    <div v-else class="product-list">
      <div v-for="item in filteredProducts" :key="item.id" class="product-card">
        <div class="product-info">
          <h4>{{ item.title }}</h4>
          <span class="badge">{{ item.category }}</span>
          <span :class="['stock-status', item.inStock ? 'in' : 'out']">
            {{ item.inStock ? 'มีสินค้า' : 'สินค้าหมด' }}
          </span>
        </div>
        <div class="product-action">
          <span class="price">${{ item.price.toFixed(2) }}</span>
          <button @click="handleDelete(item.id)" class="btn-delete">ลบ</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 700px;
  margin: 30px auto;
  padding: 24px;
  background: #ffffff;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
}
h2 {
  margin-top: 0;
  color: #1a202c;
}
.add-form {
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
}
.add-form input {
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
  flex: 1;
}
.btn-add {
  background: #2563eb;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
.filter-bar {
  display: flex;
  gap: 10px;
  margin-bottom: 16px;
}
.search-input {
  flex: 2;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
.category-select {
  flex: 1;
  padding: 8px 12px;
  border: 1px solid #cbd5e1;
  border-radius: 6px;
}
.summary-text {
  font-size: 14px;
  color: #64748b;
  margin-bottom: 16px;
}
.empty-state {
  text-align: center;
  padding: 30px;
  color: #ef4444;
  background: #fef2f2;
  border-radius: 8px;
}
.product-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.product-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 14px 16px;
  border: 1px solid #e2e8f0;
  border-radius: 8px;
}
.product-info h4 {
  margin: 0 0 6px 0;
  font-size: 16px;
  color: #1e293b;
}
.badge {
  display: inline-block;
  background: #f1f5f9;
  color: #475569;
  font-size: 12px;
  padding: 2px 8px;
  border-radius: 4px;
  margin-right: 8px;
}
.stock-status {
  font-size: 12px;
  font-weight: 600;
}
.stock-status.in { color: #16a34a; }
.stock-status.out { color: #dc2626; }
.product-action {
  display: flex;
  align-items: center;
  gap: 16px;
}
.price {
  font-weight: bold;
  font-size: 16px;
  color: #0f172a;
}
.btn-delete {
  background: #fee2e2;
  color: #dc2626;
  border: none;
  padding: 6px 12px;
  border-radius: 6px;
  cursor: pointer;
}
.btn-delete:hover {
  background: #fca5a5;
}
</style>