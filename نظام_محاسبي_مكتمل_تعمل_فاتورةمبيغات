<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="utf-8" />
<meta name="viewport" content="width=device-width,initial-scale=1" />
<title>نظام محاسبي مبسط</title>
<!-- بسيطة و عصرية مع تأثيرات -->
<style>
:root{
  --bg:#0f1724; --card:#111827; --accent:#06b6d4; --muted:#94a3b8; --glass: rgba(255,255,255,0.03);
  --success:#10b981; --danger:#ef4444; --panel:#0b1220;
  --radius:12px;
  font-family: "Segoe UI", Tahoma, Arial, sans-serif;
}
*{box-sizing:border-box}
html,body{height:100%;margin:0;background:
 linear-gradient(180deg,#071025 0%, #071827 50%, #07182b 100%); color:#e6eef6}
.app{display:flex;height:100vh;gap:18px;padding:18px}
.sidebar{
  width:320px;background:linear-gradient(180deg,rgba(255,255,255,0.02),rgba(255,255,255,0.01));
  border-radius:var(--radius);padding:16px;backdrop-filter: blur(6px);
  box-shadow:0 6px 18px rgba(2,6,23,0.6)
}
.brand{display:flex;align-items:center;gap:12px;margin-bottom:10px}
.logo{
  width:48px;height:48px;border-radius:10px;background:linear-gradient(135deg,var(--accent),#7c3aed);
  display:flex;align-items:center;justify-content:center;font-weight:700;color:#042028;
  box-shadow:0 6px 18px rgba(6,11,14,0.6)
}
.h1{font-size:16px;font-weight:700}
.side-menu{margin-top:8px}
.menu-section{margin-top:12px}
.menu-section h3{font-size:13px;color:var(--muted);margin:8px 0 6px}
.menu-item{display:flex;align-items:center;justify-content:space-between;padding:8px;border-radius:8px;
  cursor:pointer;transition:all .18s}
.menu-item:hover{background:var(--glass);transform:translateX(-4px)}
.menu-item span{font-weight:600}
.badge{background:rgba(255,255,255,0.04);padding:6px 8px;border-radius:8px;font-size:12px;color:var(--muted)}

.main{
  flex:1;display:flex;flex-direction:column;gap:14px;overflow:hidden;
}
.header{
  display:flex;align-items:center;justify-content:space-between;padding:12px;border-radius:12px;background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);
  box-shadow:0 6px 18px rgba(2,6,23,0.45)
}
.header .left{display:flex;gap:10px;align-items:center}
.header .actions{display:flex;gap:8px}
.btn{
  background:linear-gradient(90deg,var(--accent),#7c3aed);color:#022029;padding:8px 12px;border-radius:10px;
  border:none;cursor:pointer;font-weight:700;box-shadow:0 6px 16px rgba(2,6,23,0.45)
}
.view{
  flex:1;overflow:auto;padding:14px;border-radius:12px;background:linear-gradient(180deg,rgba(255,255,255,0.01),rgba(255,255,255,0.005));
  box-shadow:0 6px 30px rgba(2,6,23,0.5)
}
.card{background:linear-gradient(180deg,rgba(255,255,255,0.02),transparent);padding:12px;border-radius:10px;margin-bottom:12px}
.form-row{display:flex;gap:8px;margin-bottom:8px}
.input, textarea, select{
  background:transparent;border:1px solid rgba(255,255,255,0.04);padding:8px;border-radius:8px;color:#e6eef6;flex:1
}
.input.small{width:160px}
.table{width:100%;border-collapse:collapse;margin-top:10px}
.table th, .table td{padding:8px;border-bottom:1px dashed rgba(255,255,255,0.03);text-align:center}
.table th{font-size:13px;color:var(--muted)}
.actions-cell button{margin:0 4px}
.kpi{display:flex;gap:12px}
.kpi .item{flex:1;padding:12px;border-radius:10px;background:rgba(255,255,255,0.02);text-align:center}
.autocomplete-list{position:relative}
.suggestion-list{position:absolute;right:0;left:0;top:100%;background:#081023;border-radius:8px;max-height:200px;overflow:auto;border:1px solid rgba(255,255,255,0.03);z-index:999}
.suggestion-list div{padding:8px;border-bottom:1px solid rgba(255,255,255,0.02);cursor:pointer}
.small-muted{font-size:12px;color:var(--muted)}
.footer{display:flex;justify-content:space-between;gap:12px;align-items:center;padding:10px;border-radius:10px;background:rgba(255,255,255,0.01)}
.right-to-left{direction:rtl}

/* responsive */
@media(max-width:900px){
  .sidebar{display:none}
  .app{padding:8px}
}
</style>
</head>
<body>
<div class="app">
  <!-- Sidebar -->
  <aside class="sidebar" role="navigation">
    <div class="brand">
      <div class="logo" id="companyLogoText">ش</div>
      <div>
        <div class="h1" id="companyName">شركة تجريبية</div>
        <div class="small-muted" id="currentUser">المستخدم: المدير</div>
      </div>
    </div>

    <div class="side-menu">
      <div class="menu-section">
        <h3>القائمة الجانبية</h3>
        <div class="menu-item" data-view="items"><span>الأصناف</span><div class="badge">أضف / بيانات</div></div>
        <div class="menu-item" data-view="suppliers"><span>الموردين</span><div class="badge">أضف / بيانات</div></div>
        <div class="menu-item" data-view="customers"><span>العملاء</span><div class="badge">أضف / بيانات</div></div>
        <div class="menu-item" data-view="cash"><span>الصندوق</span><div class="badge">بيانات</div></div>
      </div>

      <div class="menu-section">
        <h3>🧾 الفواتير</h3>
        <div class="menu-item" data-view="invoices_purchase"><span>مشتريات</span><div class="badge">فاتورة</div></div>
        <div class="menu-item" data-view="invoices_purchase_return"><span>مرتجع مشتريات</span><div class="badge">فاتورة</div></div>
        <div class="menu-item" data-view="invoices_sales"><span>مبيعات</span><div class="badge">فاتورة</div></div>
        <div class="menu-item" data-view="invoices_sales_return"><span>مرتجع مبيعات</span><div class="badge">فاتورة</div></div>
      </div>

      <div class="menu-section">
        <h3>📊 التقارير</h3>
        <div class="menu-item" data-view="report_purchases"><span>تقارير المشتريات</span><div class="badge">عرض</div></div>
        <div class="menu-item" data-view="report_sales"><span>تقارير المبيعات</span><div class="badge">عرض</div></div>
        <div class="menu-item" data-view="journal"><span>💰 القيود اليومية</span><div class="badge">قيود</div></div>
        <div class="menu-item" data-view="ledger"><span>📚 دفتر الأستاذ</span><div class="badge">عرض</div></div>
        <div class="menu-item" data-view="trial_balance"><span>📈 الميزانية العمومية / قائمة المتاجرة</span><div class="badge">قوائم</div></div>
        <div class="menu-item" data-view="pl"><span>💵 الأرباح والخسائر</span><div class="badge">قائمة</div></div>
        <div class="menu-item" data-view="statements"><span>📂 كشف الحساب</span><div class="badge">العملاء/الموردين</div></div>
        <div class="menu-item" data-view="settings"><span>⚙️ إعدادات النظام</span><div class="badge">تعديل</div></div>
      </div>

    </div>
  </aside>

  <!-- Main -->
  <main class="main">
    <div class="header">
      <div class="left">
        <button class="btn" id="btnNewInvoice">فاتورة جديدة</button>
        <div class="small-muted" id="appClock"></div>
      </div>
      <div class="actions">
        <button class="btn" id="btnExport">تصدير (JSON)</button>
        <button class="btn" id="btnImport">استيراد (JSON)</button>
      </div>
    </div>

    <section class="view" id="viewArea">
      <!-- محتوى ديناميكي يظهر هنا -->
      <div id="welcome" class="card">
        <h2>مرحبًا بك في النظام المحاسبي</h2>
        <p class="small-muted">يمكنك البدء بإضافة الأصناف والموردين والعملاء ثم إنشاء فواتير المشتريات أو المبيعات. يتم حفظ كل شيء في المتصفح (localStorage).</p>

        <div class="kpi">
          <div class="item card">
            <div class="small-muted">إجمالي الأصناف</div>
            <div id="kpiItems" style="font-size:20px;font-weight:800">0</div>
          </div>
          <div class="item card">
            <div class="small-muted">إجمالي الموردين</div>
            <div id="kpiSuppliers" style="font-size:20px;font-weight:800">0</div>
          </div>
          <div class="item card">
            <div class="small-muted">إجمالي العملاء</div>
            <div id="kpiCustomers" style="font-size:20px;font-weight:800">0</div>
          </div>
        </div>

      </div>
    </section>

    <div class="footer">
      <div class="small-muted">نظام محاسبي مبسط — نسخة تجريبية</div>
      <div class="small-muted" id="storageInfo">حفظ محلي</div>
    </div>
  </main>
</div>

<!-- Templates and Modals (simple) -->
<!-- الفواتير / نماذج سريعة -->
<div id="modals" style="display:none"></div>

<script>
/*
  نظام محاسبي مبسط - JavaScript
  - نموذج بيانات مخزن في localStorage
  - يدعم: أصناف، موردين (رئيسي/فرعي)، عملاء (رئيسي/فرعي)، فواتير مشتريات/مبيعات/مرتجعات،
    قيود يومية، دفتر الأستاذ، تقارير بسيطة، إعدادات الشركة.
  - ملاحظات:
    * كل سجل (صنف/مورد/عميل/فاتورة) يحصل على ID تلقائي متسلسل.
    * الفاتورة تحفظ نسخة من بيانات الصنف (رقم، اسم، وحدة، سعر عند وقت البيع/الشراء)
    * عند تعديل صنف لاحقاً، لا يتغير سعر الأصناف المحفوظة في الفواتير.
*/

// ----- Utilities -----
function uid(prefix='id') {
  // id متسلسل يعتمد على الوقت + رقم عشوائي لضمان التفرد
  return prefix + '_' + Date.now().toString(36) + Math.random().toString(36).slice(2,7);
}
function nowIso(){ return new Date().toISOString(); }
function formatDateTime(iso){
  const d=new Date(iso);
  return d.toLocaleString('ar-EG');
}
function money(n){ return (Number(n)||0).toFixed(2); }

// ----- Storage Layer -----
const STORE_KEY = 'simple_accounting_v1';
function loadStore(){
  const raw = localStorage.getItem(STORE_KEY);
  if(raw) try { return JSON.parse(raw); } catch(e){ console.error(e); }
  // default initial structure
  return {
    settings: {companyName:'شركة تجريبية', logoText:'ش', currentUser:'المدير'},
    sequences: { item:0, supplier:0, customer:0, invoice_purchase:0, invoice_sales:0, journal:0},
    items: {}, // id -> {id, seq, code, name, unit, buyPrice, sellPrice, createdAt}
    suppliers: {}, // id -> {id, seq, code, name, phone, address, balances: {debit:0, credit:0}}
    customers: {},
    cashAccounts: {cash: {id:'cash', name:'الصندوق', balance:0}, bank: {id:'bank', name:'البنك', balance:0}},
    invoices: {}, // id -> {id, type:'purchase'|'sales'|'purchase_return'|'sales_return', seq, number, date, timeSaved, paymentMethod, partyId, partyType, items:[{itemSnapshot,...}], totals:{itemsTotal,discount,transport,tax,grandTotal}, notes}
    journals: {}, // id -> {id, seq, date, lines:[{account, side, amount, note}]}
  };
}
function saveStore(s){
  localStorage.setItem(STORE_KEY, JSON.stringify(s));
  updateKPIs();
}

// ----- App State -----
let STORE = loadStore();
saveStore(STORE); // ensure defaults persisted

// ----- UI Helpers -----
const viewArea = document.getElementById('viewArea');
const appClock = document.getElementById('appClock');

function updateClock(){
  appClock.textContent = new Date().toLocaleString('ar-EG');
}
setInterval(updateClock,1000);
updateClock();

function updateKPIs(){
  document.getElementById('kpiItems').textContent = Object.keys(STORE.items).length;
  document.getElementById('kpiSuppliers').textContent = Object.keys(STORE.suppliers).length;
  document.getElementById('kpiCustomers').textContent = Object.keys(STORE.customers).length;
  document.getElementById('companyName').textContent = STORE.settings.companyName || 'شركة';
  document.getElementById('companyLogoText').textContent = STORE.settings.logoText || 'ش';
  document.getElementById('currentUser').textContent = 'المستخدم: ' + (STORE.settings.currentUser || 'المدير');
  document.getElementById('storageInfo').textContent = 'آخر حفظ: ' + new Date().toLocaleString('ar-EG');
}
updateKPIs();

// ----- Render Views -----
function clearView(){ viewArea.innerHTML = ''; }

function renderItemsView(){
  clearView();
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `
    <h3>الأصناف</h3>
    <div class="form-row">
      <input placeholder="اسم الصنف" id="itemName" class="input" />
      <input placeholder="الوحدة" id="itemUnit" class="input small" />
      <input placeholder="سعر الشراء" id="itemBuy" class="input small" />
      <input placeholder="سعر البيع" id="itemSell" class="input small" />
      <button class="btn" id="addItemBtn">أضف</button>
    </div>
    <div class="small-muted">قائمة الأصناف المسجلة:</div>
    <table class="table" id="itemsTable"><thead><tr><th>ت</th><th>الرمز</th><th>الاسم</th><th>الوحدة</th><th>سعر شراء</th><th>سعر بيع</th><th>إجراءات</th></tr></thead><tbody></tbody></table>
  `;
  viewArea.appendChild(card);

  const tbody = card.querySelector('tbody');
  function refresh(){
    tbody.innerHTML='';
    const items = Object.values(STORE.items).sort((a,b)=>a.seq-b.seq);
    items.forEach((it, idx)=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${idx+1}</td><td>${it.code}</td><td>${it.name}</td><td>${it.unit}</td><td>${money(it.buyPrice)}</td><td>${money(it.sellPrice)}</td>
        <td class="actions-cell">
          <button data-id="${it.id}" class="btn small edit">تعديل</button>
          <button data-id="${it.id}" class="btn small del" style="background:var(--danger)">حذف</button>
        </td>`;
      tbody.appendChild(tr);
    });
  }
  refresh();

  card.querySelector('#addItemBtn').addEventListener('click', ()=>{
    const name = card.querySelector('#itemName').value.trim();
    const unit = card.querySelector('#itemUnit').value.trim() || 'pc';
    const buy = parseFloat(card.querySelector('#itemBuy').value) || 0;
    const sell = parseFloat(card.querySelector('#itemSell').value) || 0;
    if(!name){ alert('ادخل اسم الصنف'); return; }
    // create
    STORE.sequences.item += 1;
    const seq = STORE.sequences.item;
    const code = seq.toString().padStart(4,'0');
    const id = uid('item');
    STORE.items[id] = {id, seq, code, name, unit, buyPrice:buy, sellPrice:sell, createdAt: nowIso()};
    saveStore(STORE);
    card.querySelector('#itemName').value=''; card.querySelector('#itemUnit').value=''; card.querySelector('#itemBuy').value=''; card.querySelector('#itemSell').value='';
    refresh();
  });

  tbody.addEventListener('click', (e)=>{
    if(e.target.classList.contains('edit')){
      const id = e.target.dataset.id;
      const it = STORE.items[id];
      const newName = prompt('اسم الصنف', it.name); if(!newName) return;
      const newUnit = prompt('الوحدة', it.unit) || it.unit;
      const newBuy = parseFloat(prompt('سعر الشراء', it.buyPrice)) || it.buyPrice;
      const newSell = parseFloat(prompt('سعر البيع', it.sellPrice)) || it.sellPrice;
      // IMPORTANT: don't change historical invoices; invoices keep snapshot
      STORE.items[id].name=newName; STORE.items[id].unit=newUnit; STORE.items[id].buyPrice=newBuy; STORE.items[id].sellPrice=newSell;
      saveStore(STORE); refresh();
    } else if(e.target.classList.contains('del')){
      const id = e.target.dataset.id;
      if(!confirm('حذف الصنف؟ هذا لن يحذف النسخ داخل الفواتير')) return;
      delete STORE.items[id]; saveStore(STORE); refresh();
    }
  });
}

function renderSuppliersView(){
  clearView();
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `
    <h3>الموردين</h3>
    <div class="form-row">
      <input placeholder="اسم المورد" id="supName" class="input" />
      <input placeholder="الهاتف" id="supPhone" class="input small" />
      <input placeholder="العنوان" id="supAddr" class="input small" />
      <button class="btn" id="addSupBtn">أضف مورد</button>
    </div>
    <table class="table" id="supTable"><thead><tr><th>ت</th><th>رمز</th><th>الاسم</th><th>هاتف</th><th>الرصيد</th><th>إجراءات</th></tr></thead><tbody></tbody></table>
  `;
  viewArea.appendChild(card);
  const tbody = card.querySelector('tbody');
  function refresh(){
    tbody.innerHTML='';
    const arr = Object.values(STORE.suppliers).sort((a,b)=>a.seq-b.seq);
    arr.forEach((s, idx)=>{
      const balObj = s.balances || {debit:0, credit:0};
      const balVal = ( (balObj.debit||0) - (balObj.credit||0) );
      const balText = (balVal>0? money(balVal)+' له' : money(Math.abs(balVal))+' عليه');
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${idx+1}</td><td>${s.code}</td><td>${s.name}</td><td>${s.phone||''}</td><td>${balText}</td>
        <td><button class="btn edit" data-id="${s.id}">تعديل</button> <button class="btn del" data-id="${s.id}" style="background:var(--danger)">حذف</button></td>`;
      tbody.appendChild(tr);
    });
  }
  refresh();

  card.querySelector('#addSupBtn').addEventListener('click', ()=>{
    const name = card.querySelector('#supName').value.trim();
    if(!name){ alert('ادخل اسم المورد'); return; }
    STORE.sequences.supplier += 1;
    const seq = STORE.sequences.supplier;
    const code = 'S' + seq.toString().padStart(4,'0');
    const id = uid('supplier');
    STORE.suppliers[id] = {id, seq, code, name, phone: card.querySelector('#supPhone').value.trim(), address: card.querySelector('#supAddr').value.trim(), balances:{debit:0,credit:0}};
    saveStore(STORE);
    card.querySelector('#supName').value=''; card.querySelector('#supPhone').value=''; card.querySelector('#supAddr').value='';
    refresh();
  });

  tbody.addEventListener('click', (e)=>{
    if(e.target.classList.contains('edit')){
      const id = e.target.dataset.id; const s = STORE.suppliers[id];
      const n = prompt('اسم المورد', s.name); if(!n) return;
      s.name = n; s.phone = prompt('الهاتف', s.phone)||s.phone; s.address = prompt('العنوان', s.address)||s.address;
      saveStore(STORE); refresh();
    } else if(e.target.classList.contains('del')){
      const id = e.target.dataset.id;
      if(!confirm('حذف المورد؟')) return;
      delete STORE.suppliers[id]; saveStore(STORE); refresh();
    }
  });
}

function renderCustomersView(){
  clearView();
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `
    <h3>العملاء</h3>
    <div class="form-row">
      <input placeholder="اسم العميل" id="cusName" class="input" />
      <input placeholder="الهاتف" id="cusPhone" class="input small" />
      <input placeholder="العنوان" id="cusAddr" class="input small" />
      <button class="btn" id="addCusBtn">أضف عميل</button>
    </div>
    <table class="table" id="cusTable"><thead><tr><th>ت</th><th>رمز</th><th>الاسم</th><th>هاتف</th><th>الرصيد</th><th>إجراءات</th></tr></thead><tbody></tbody></table>
  `;
  viewArea.appendChild(card);
  const tbody = card.querySelector('tbody');
  function refresh(){
    tbody.innerHTML='';
    const arr = Object.values(STORE.customers).sort((a,b)=>a.seq-b.seq);
    arr.forEach((s, idx)=>{
      const balObj = s.balances || {debit:0, credit:0};
      const balVal = ( (balObj.credit||0) - (balObj.debit||0) ); // customer: credit - debit -> positive means عليه
      const balText = (balVal>0? money(balVal)+' عليه' : money(Math.abs(balVal))+' له');
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${idx+1}</td><td>${s.code}</td><td>${s.name}</td><td>${s.phone||''}</td><td>${balText}</td>
        <td><button class="btn edit" data-id="${s.id}">تعديل</button> <button class="btn del" data-id="${s.id}" style="background:var(--danger)">حذف</button></td>`;
      tbody.appendChild(tr);
    });
  }
  refresh();

  card.querySelector('#addCusBtn').addEventListener('click', ()=>{
    const name = card.querySelector('#cusName').value.trim();
    if(!name){ alert('ادخل اسم العميل'); return; }
    STORE.sequences.customer += 1;
    const seq = STORE.sequences.customer;
    const code = 'C' + seq.toString().padStart(4,'0');
    const id = uid('customer');
    STORE.customers[id] = {id, seq, code, name, phone: card.querySelector('#cusPhone').value.trim(), address: card.querySelector('#cusAddr').value.trim(), balances:{debit:0,credit:0}};
    saveStore(STORE);
    card.querySelector('#cusName').value=''; card.querySelector('#cusPhone').value=''; card.querySelector('#cusAddr').value='';
    refresh();
  });

  tbody.addEventListener('click', (e)=>{
    if(e.target.classList.contains('edit')){
      const id = e.target.dataset.id; const s = STORE.customers[id];
      const n = prompt('اسم العميل', s.name); if(!n) return;
      s.name = n; s.phone = prompt('الهاتف', s.phone)||s.phone; s.address = prompt('العنوان', s.address)||s.address;
      saveStore(STORE); refresh();
    } else if(e.target.classList.contains('del')){
      const id = e.target.dataset.id;
      if(!confirm('حذف العميل؟')) return;
      delete STORE.customers[id]; saveStore(STORE); refresh();
    }
  });
}

// Create invoice UI (works for purchase/sales and returns)
function renderInvoiceEditor(type){
  clearView();
  // type: 'purchase'|'sales'|'purchase_return'|'sales_return'
  const isSales = (type==='sales' || type==='sales_return');
  const title = type==='purchase' ? 'فاتورة مشتريات' : type==='sales' ? 'فاتورة مبيعات' : type==='purchase_return' ? 'فاتورة مرتجع مشتريات' : 'فاتورة مرتجع مبيعات';
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `
    <div style="display:flex;justify-content:space-between;align-items:center">
      <h3>${title}</h3>
      <div class="small-muted">رقم الفاتورة: <span id="invNumber">---</span></div>
    </div>

    <div class="form-row">
      <label class="small-muted">طريقة الدفع:</label>
      <select id="paymentMethod" class="input small">
        <option value="cash">نقد</option>
        <option value="bank">بنك</option>
        <option value="credit">آجل</option>
      </select>
      <div id="partySelector" style="flex:1">
        <input placeholder="${isSales ? 'اختر/ابحث عن العميل' : 'اختر/ابحث عن المورد'}" id="partyInput" class="input" />
        <button class="btn" id="openPartyList">قائمة</button>
        <button class="btn" id="btnAddParty">إضافة جديد</button>
      </div>
      <div style="display:flex;gap:8px">
        <div class="small-muted">التاريخ:</div><div id="invDate" class="small-muted">${new Date().toLocaleDateString('ar-EG')}</div>
      </div>
    </div>

    <div class="card" style="margin-top:10px">
      <div style="display:flex;gap:8px;margin-bottom:6px;align-items:center">
        <input id="itemSearch" class="input" placeholder="بحث صنف بالاسم أو الرقم..." />
        <button class="btn" id="btnOpenItems">فتح الاصناف</button>
        <button class="btn" id="btnAddItemInline">إضافة صنف جديد</button>
      </div>
      <table class="table" id="invItemsTable">
        <thead><tr><th>ت</th><th>رقم الصنف</th><th>اسم الصنف</th><th>وحدة</th><th>الكمية</th><th>سعر</th><th>المجموع</th><th>إجراءات</th></tr></thead>
        <tbody></tbody>
      </table>
      <div style="display:flex;justify-content:flex-end;gap:12px;margin-top:8px">
        <div class="small-muted">عدد القطع: <span id="countPieces">0</span></div>
        <div class="small-muted">إجمالي الأصناف: <span id="itemsTotal">0.00</span></div>
        <div class="small-muted">الخصم: <input id="invDiscount" class="input small" value="0" /></div>
        <div class="small-muted">مصاريف النقل: <input id="invTransport" class="input small" value="0" /></div>
        <div class="small-muted">الضريبة: <input id="invTax" class="input small" value="0" /></div>
        <div class="small-muted">صافي الفاتورة: <strong id="invGrandTotal">0.00</strong></div>
      </div>
    </div>

    <div style="display:flex;justify-content:space-between;align-items:center;margin-top:10px">
      <div>
        <textarea id="invNotes" placeholder="ملاحظات..." class="input" style="height:60px;width:360px"></textarea>
      </div>
      <div style="display:flex;flex-direction:column;gap:8px">
        <div style="display:flex;gap:8px">
          <button class="btn" id="saveInvoice">حفظ</button>
          <button class="btn" id="printInvoice">طباعة</button>
          <button class="btn" id="cancelInvoice" style="background:#374151">إلغاء</button>
        </div>
        <div class="small-muted">عند الحفظ تُسجل الفاتورة مع التاريخ والوقت.</div>
      </div>
    </div>
  `;
  viewArea.appendChild(card);

  // prepare invoice number
  const seqKey = type==='purchase' ? 'invoice_purchase' : type==='sales' ? 'invoice_sales' : (type==='purchase_return' ? 'invoice_purchase' : 'invoice_sales');
  STORE.sequences[seqKey] = STORE.sequences[seqKey] || 0;
  const nextSeq = STORE.sequences[seqKey] + 1;
  card.querySelector('#invNumber').textContent = nextSeq.toString().padStart(6,'0');

  // party selection logic
  const partyInput = card.querySelector('#partyInput');
  const openPartyList = card.querySelector('#openPartyList');
  const addPartyBtn = card.querySelector('#btnAddParty');
  let selectedPartyId = null;

  function openPartyChooser(){
    const list = isSales ? Object.values(STORE.customers) : Object.values(STORE.suppliers);
    const name = isSales ? 'العملاء' : 'الموردين';
    const choose = prompt(name + '\\nاكتب رقم الترتيب لاختيار أو اترك فارغ للإلغاء:\\n' + list.map((p,i)=>`${i+1}. ${p.name} (${p.code})`).join('\\n'));
    const idx = parseInt(choose);
    if(idx && list[idx-1]){ selectedPartyId = list[idx-1].id; partyInput.value = list[idx-1].name; }
  }
  openPartyList.addEventListener('click', openPartyChooser);
  addPartyBtn.addEventListener('click', ()=>{
    const nm = prompt(isSales ? 'اسم العميل الجديد' : 'اسم المورد الجديد');
    if(!nm) return;
    if(isSales){
      STORE.sequences.customer += 1; const seq = STORE.sequences.customer;
      const id = uid('customer'); STORE.customers[id] = {id, seq, code:'C'+seq.toString().padStart(4,'0'), name:nm, phone:'', address:'', balances:{debit:0,credit:0}};
      saveStore(STORE); selectedPartyId = id; partyInput.value = nm;
    } else {
      STORE.sequences.supplier += 1; const seq = STORE.sequences.supplier;
      const id = uid('supplier'); STORE.suppliers[id] = {id, seq, code:'S'+seq.toString().padStart(4,'0'), name:nm, phone:'', address:'', balances:{debit:0,credit:0}};
      saveStore(STORE); selectedPartyId = id; partyInput.value = nm;
    }
  });

  // item list logic
  const invItems = [];
  const tbody = card.querySelector('#invItemsTable tbody');

  function refreshItemsTable(){
    tbody.innerHTML = '';
    invItems.forEach((row, idx)=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${idx+1}</td><td>${row.itemCode||''}</td><td>${row.itemName||''}</td><td>${row.unit||''}</td>
        <td><input class="input small qty" data-idx="${idx}" value="${row.qty}" /></td>
        <td><input class="input small price" data-idx="${idx}" value="${row.price}" /></td>
        <td class="sum">${money(row.qty * row.price)}</td>
        <td><button data-idx="${idx}" class="btn delRow" style="background:var(--danger)">حذف</button></td>`;
      tbody.appendChild(tr);
    });
    updateTotals();
  }

  function updateTotals(){
    const itemsTotal = invItems.reduce((s,r)=> s + (Number(r.qty)||0)*(Number(r.price)||0),0);
    const countPieces = invItems.reduce((s,r)=> s + (Number(r.qty)||0),0);
    const discount = parseFloat(card.querySelector('#invDiscount').value) || 0;
    const transport = parseFloat(card.querySelector('#invTransport').value) || 0;
    const tax = parseFloat(card.querySelector('#invTax').value) || 0;
    const grand = itemsTotal - discount + transport + tax;
    card.querySelector('#itemsTotal').textContent = money(itemsTotal);
    card.querySelector('#countPieces').textContent = countPieces;
    card.querySelector('#invGrandTotal').textContent = money(grand);
  }

  // search add item by name or code
  const itemSearch = card.querySelector('#itemSearch');
  itemSearch.addEventListener('keydown', (e)=>{
    if(e.key === 'Enter'){
      const q = itemSearch.value.trim().toLowerCase();
      if(!q) return;
      // try find by code or name prefix
      const items = Object.values(STORE.items);
      let found = items.find(it => it.code.toLowerCase() === q || it.name.toLowerCase() === q);
      if(!found) found = items.find(it => it.name.toLowerCase().includes(q) || it.code.toLowerCase().includes(q));
      if(found){
        addItemToInvoice(found);
        itemSearch.value='';
      } else {
        if(confirm('الصنف غير موجود. إضافة صنف جديد باسم: ' + itemSearch.value.trim() + ' ؟')){
          // create quick
          STORE.sequences.item += 1; const seq = STORE.sequences.item;
          const code = seq.toString().padStart(4,'0'); const id = uid('item');
          const nm = itemSearch.value.trim();
          STORE.items[id] = {id, seq, code, name:nm, unit:'pc', buyPrice:0, sellPrice:0, createdAt:nowIso()};
          saveStore(STORE);
          addItemToInvoice(STORE.items[id]); itemSearch.value='';
        }
      }
    }
  });

  function addItemToInvoice(item){
    // snapshot: preserve name/unit/price at time of adding
    const price = isSales ? (item.sellPrice || 0) : (item.buyPrice || 0);
    invItems.push({itemId:item.id, itemCode:item.code, itemName:item.name, unit:item.unit, qty:1, price: price});
    refreshItemsTable();
  }

  // open full items list
  card.querySelector('#btnOpenItems').addEventListener('click', ()=>{
    const items = Object.values(STORE.items).sort((a,b)=>a.seq-b.seq);
    const list = items.map((it,i)=>`${i+1}. ${it.name} (رمز:${it.code}) - سعر بيع:${it.sellPrice} - سعر شراء:${it.buyPrice}`).join('\\n');
    const choose = prompt('قائمة الأصناف:\\n' + list + '\\nاكتب رقم لاختيار، أو إلغاء');
    const idx = parseInt(choose);
    if(idx && items[idx-1]) addItemToInvoice(items[idx-1]);
  });

  // inline add item
  card.querySelector('#btnAddItemInline').addEventListener('click', ()=>{
    const nm = prompt('اسم الصنف'); if(!nm) return;
    STORE.sequences.item += 1; const seq = STORE.sequences.item; const code = seq.toString().padStart(4,'0'); const id = uid('item');
    const buyP = parseFloat(prompt('سعر الشراء', '0'))||0; const sellP = parseFloat(prompt('سعر البيع', '0'))||0; const unit = prompt('الوحدة', 'pc')||'pc';
    STORE.items[id] = {id, seq, code, name:nm, unit, buyPrice:buyP, sellPrice:sellP, createdAt:nowIso()};
    saveStore(STORE); addItemToInvoice(STORE.items[id]);
  });

  // table events
  tbody.addEventListener('click',(e)=>{
    if(e.target.classList.contains('delRow')) {
      const idx = parseInt(e.target.dataset.idx);
      invItems.splice(idx,1); refreshItemsTable();
    }
  });
  tbody.addEventListener('input', (e)=>{
    const tar = e.target;
    if(tar.classList.contains('qty') || tar.classList.contains('price')){
      const idx = parseInt(tar.dataset.idx);
      if(tar.classList.contains('qty')) invItems[idx].qty = parseFloat(tar.value) || 0;
      if(tar.classList.contains('price')) invItems[idx].price = parseFloat(tar.value) || 0;
      // update sum cell
      const tr = tar.closest('tr'); const sumCell = tr.querySelector('.sum');
      sumCell.textContent = money(invItems[idx].qty * invItems[idx].price);
      updateTotals();
    }
  });

  // totals inputs
  ['invDiscount','invTransport','invTax'].forEach(id=>{
    card.querySelector('#'+id).addEventListener('input', updateTotals);
  });

  // save invoice
  card.querySelector('#saveInvoice').addEventListener('click', ()=>{
    if(invItems.length === 0){ alert('أضف أصناف إلى الفاتورة'); return; }
    const paymentMethod = card.querySelector('#paymentMethod').value;
    const partyName = partyInput.value.trim();
    if(paymentMethod === 'credit' && !partyName && !selectedPartyId){ alert('اختر المورد/العميل عندما تكون طريقة الدفع آجل'); return; }
    // attach party id if selected, else try find by name
    if(!selectedPartyId && partyName){
      if(isSales){
        const found = Object.values(STORE.customers).find(c=>c.name===partyName); if(found) selectedPartyId = found.id;
      } else {
        const found = Object.values(STORE.suppliers).find(c=>c.name===partyName); if(found) selectedPartyId = found.id;
      }
    }
    // create invoice record: store snapshot of items
    const seqKeyLocal = seqKey;
    STORE.sequences[seqKeyLocal] += 1;
    const seq = STORE.sequences[seqKeyLocal];
    const number = seq.toString().padStart(6,'0');
    const id = uid('invoice');
    // create deep copy of invItems
    const itemsSnapshot = invItems.map(it => ({...it}));
    const totals = {
      itemsTotal: parseFloat(card.querySelector('#itemsTotal').textContent) || 0,
      discount: parseFloat(card.querySelector('#invDiscount').value) || 0,
      transport: parseFloat(card.querySelector('#invTransport').value) || 0,
      tax: parseFloat(card.querySelector('#invTax').value) || 0,
      grandTotal: parseFloat(card.querySelector('#invGrandTotal').textContent) || 0
    };
    const invoice = {
      id, type, seq, number, createdAt: nowIso(), paymentMethod, partyId:selectedPartyId, partyName: partyName || null,
      items: itemsSnapshot, totals, notes: card.querySelector('#invNotes').value || ''
    };
    STORE.invoices[id] = invoice;

    // update ledgers / balances: simple bookkeeping entries
    // For purchase: debit inventory/expense, credit cash/bank/accounts payable
    // For sales: debit cash/accounts receivable, credit sales revenue
    // Here we update simple balances for customers/suppliers & cashAccounts
    if(type==='purchase' || type==='purchase_return'){
      // adjust supplier if credit
      if(paymentMethod==='credit' && invoice.partyId){
        const sup = STORE.suppliers[invoice.partyId];
        if(sup){
          // credit increases supplier's credit (we owe supplier)
          // For purchase, supplier.credit += grandTotal; for return, reduce
          const delta = (type==='purchase') ? invoice.totals.grandTotal : -invoice.totals.grandTotal;
          sup.balances.credit = (sup.balances.credit||0) + delta;
        }
      } else {
        // cash or bank: adjust cash/bank balances
        if(paymentMethod==='cash') STORE.cashAccounts.cash.balance -= invoice.totals.grandTotal;
        else if(paymentMethod==='bank') STORE.cashAccounts.bank.balance -= invoice.totals.grandTotal;
      }
    } else if(type==='sales' || type==='sales_return'){
      if(paymentMethod==='credit' && invoice.partyId){
        const cus = STORE.customers[invoice.partyId];
        if(cus){
          const delta = (type==='sales') ? invoice.totals.grandTotal : -invoice.totals.grandTotal;
          cus.balances.credit = (cus.balances.credit||0) + delta;
        }
      } else {
        if(paymentMethod==='cash') STORE.cashAccounts.cash.balance += invoice.totals.grandTotal;
        else if(paymentMethod==='bank') STORE.cashAccounts.bank.balance += invoice.totals.grandTotal;
      }
    }

    saveStore(STORE);
    alert('تم حفظ الفاتورة رقم: ' + number);
    renderInvoicesList(type);
  });

  // cancel
  card.querySelector('#cancelInvoice').addEventListener('click', ()=> renderWelcome());

  updateTotals();
}

function renderInvoicesList(type){
  clearView();
  const title = type==='purchase' ? 'فواتير المشتريات' : type==='sales' ? 'فواتير المبيعات' : type==='purchase_return' ? 'فواتير مرتجع مشتريات' : 'فواتير مرتجع مبيعات';
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `
    <h3>${title}</h3>
    <div class="form-row">
      <input id="filterFrom" class="input small" type="date" />
      <input id="filterTo" class="input small" type="date" />
      <select id="filterPay" class="input small"><option value="">الكل</option><option value="cash">نقد</option><option value="bank">بنك</option><option value="credit">آجل</option></select>
      <button class="btn" id="btnFilter">بحث</button>
      <button class="btn" id="btnNew" style="background:var(--accent)">فاتورة جديدة</button>
    </div>
    <table class="table" id="invListTable"><thead><tr><th>ت</th><th>رقم</th><th>النوع</th><th>المبلغ</th><th>طريقة الدفع</th><th>المورد/العميل</th><th>التاريخ</th><th>إجراءات</th></tr></thead><tbody></tbody></table>
  `;
  viewArea.appendChild(card);
  const tbody = card.querySelector('tbody');

  function refresh(){
    tbody.innerHTML = '';
    const arr = Object.values(STORE.invoices).filter(inv=> inv.type === type ).sort((a,b)=> (b.seq||0)-(a.seq||0));
    arr.forEach((inv, idx)=>{
      const tr = document.createElement('tr');
      tr.innerHTML = `<td>${idx+1}</td><td>${inv.number}</td><td>${inv.type}</td><td>${money(inv.totals.grandTotal)}</td><td>${inv.paymentMethod}</td><td>${inv.partyName||''}</td><td>${formatDateTime(inv.createdAt)}</td>
        <td><button class="btn view" data-id="${inv.id}">عرض</button> <button class="btn del" data-id="${inv.id}" style="background:var(--danger)">حذف</button></td>`;
      tbody.appendChild(tr);
    });
  }
  refresh();
  card.querySelector('#btnNew').addEventListener('click', ()=> renderInvoiceEditor(type));
  tbody.addEventListener('click',(e)=>{
    if(e.target.classList.contains('view')){
      const inv = STORE.invoices[e.target.dataset.id];
      alert('فاتورة رقم: '+inv.number+'\\nالنوع: '+inv.type+'\\nالمبلغ: '+money(inv.totals.grandTotal)+'\\nالتفاصيل: see console');
      console.log(inv);
    } else if(e.target.classList.contains('del')){
      if(!confirm('حذف الفاتورة؟')) return;
      delete STORE.invoices[e.target.dataset.id]; saveStore(STORE); refresh();
    }
  });
}

function renderReportsPurchases(){
  // demonstration: aggregate totals by supplier and type
  clearView();
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `<h3>تقارير المشتريات</h3><div class="small-muted">قائمة الفواتير (مشتريات ومرتجعات)</div>
    <table class="table" id="repTable"><thead><tr><th>ت</th><th>رقم</th><th>النوع</th><th>المبلغ</th><th>طريقة الدفع</th><th>المورد</th><th>التاريخ</th></tr></thead><tbody></tbody></table>`;
  viewArea.appendChild(card);
  const tbody = card.querySelector('tbody');
  const arr = Object.values(STORE.invoices).filter(i=> i.type==='purchase' || i.type==='purchase_return').sort((a,b)=>b.seq - a.seq);
  arr.forEach((inv, idx)=>{
    const tr=document.createElement('tr');
    tr.innerHTML = `<td>${idx+1}</td><td>${inv.number}</td><td>${inv.type}</td><td>${money(inv.totals.grandTotal)}</td><td>${inv.paymentMethod}</td><td>${inv.partyName||''}</td><td>${formatDateTime(inv.createdAt)}</td>`;
    tbody.appendChild(tr);
  });
}

function renderReportsSales(){
  clearView();
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `<h3>تقارير المبيعات</h3><div class="small-muted">قائمة الفواتير (مبيعات ومرتجعات)</div>
    <table class="table" id="repTable2"><thead><tr><th>ت</th><th>رقم</th><th>النوع</th><th>المبلغ</th><th>طريقة الدفع</th><th>العميل</th><th>التاريخ</th></tr></thead><tbody></tbody></table>`;
  viewArea.appendChild(card);
  const tbody = card.querySelector('tbody');
  const arr = Object.values(STORE.invoices).filter(i=> i.type==='sales' || i.type==='sales_return').sort((a,b)=>b.seq - a.seq);
  arr.forEach((inv, idx)=>{
    const tr=document.createElement('tr');
    tr.innerHTML = `<td>${idx+1}</td><td>${inv.number}</td><td>${inv.type}</td><td>${money(inv.totals.grandTotal)}</td><td>${inv.paymentMethod}</td><td>${inv.partyName||''}</td><td>${formatDateTime(inv.createdAt)}</td>`;
    tbody.appendChild(tr);
  });
}

// قيود يومية بسيطة: إدخال قيد يدوي
function renderJournal(){
  clearView();
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `<h3>القيود اليومية</h3>
    <div class="small-muted">اضف قيد (من حساب - مدين، إلى حساب - دائن). يمكنك إضافة أكثر من سطر لكل جانب.</div>
    <div id="journalRows"></div>
    <div style="display:flex;gap:8px;margin-top:8px">
      <button class="btn" id="addJournalBtn">حفظ القيد</button>
      <button class="btn" id="newJournalLine">إضافة سطر</button>
    </div>
    <h4>قائمة القيود</h4>
    <table class="table" id="journalTable"><thead><tr><th>ت</th><th>تاريخ</th><th>تفاصيل</th><th>المبلغ</th><th>إجراءات</th></tr></thead><tbody></tbody></table>
  `;
  viewArea.appendChild(card);
  const journalRowsDiv = card.querySelector('#journalRows');
  function addRow(){
    const row = document.createElement('div'); row.className='form-row';
    row.innerHTML = `<input class="input acc" placeholder="اسم الحساب" /> <select class="input side"><option value="debit">مدين</option><option value="credit">دائن</option></select> <input class="input amount" placeholder="المبلغ" /> <button class="btn removeRow" style="background:var(--danger)">حذف</button>`;
    journalRowsDiv.appendChild(row);
    row.querySelector('.removeRow').addEventListener('click', ()=> row.remove());
  }
  addRow(); addRow();

  card.querySelector('#newJournalLine').addEventListener('click', addRow);
  card.querySelector('#addJournalBtn').addEventListener('click', ()=>{
    const rows = Array.from(journalRowsDiv.querySelectorAll('.form-row')).map(r=>{
      return {account: r.querySelector('.acc').value.trim(), side: r.querySelector('.side').value, amount: parseFloat(r.querySelector('.amount').value) || 0 };
    }).filter(r=>r.amount>0 && r.account);
    if(rows.length===0){ alert('ادخل قيود صحيحة'); return; }
    // basic validation: sum debit == sum credit
    const sumDebit = rows.filter(r=>r.side==='debit').reduce((s,r)=>s+r.amount,0);
    const sumCredit = rows.filter(r=>r.side==='credit').reduce((s,r)=>s+r.amount,0);
    if(Math.abs(sumDebit - sumCredit) > 0.001){ if(!confirm('المجموع لا يتساوى (مدين != دائن). تابع؟')) return; }
    STORE.sequences.journal += 1;
    const id = uid('journal'); const seq = STORE.sequences.journal;
    STORE.journals[id] = {id, seq, date: nowIso(), lines: rows};
    saveStore(STORE);
    renderJournal(); // refresh
  });

  // show existing
  const tbody = card.querySelector('tbody');
  Object.values(STORE.journals).sort((a,b)=>b.seq-a.seq).forEach((j, idx)=>{
    const sum = j.lines.reduce((s,l)=>s+l.amount,0);
    const tr = document.createElement('tr');
    tr.innerHTML = `<td>${idx+1}</td><td>${formatDateTime(j.date)}</td><td style="text-align:left">${j.lines.map(l=>l.account+' - '+(l.side==='debit'?'مدين':'دائن')+' - '+money(l.amount)).join('<br>')}</td><td>${money(sum)}</td><td><button class="btn del" data-id="${j.id}" style="background:var(--danger)">حذف</button></td>`;
    tbody.appendChild(tr);
  });
  tbody.addEventListener('click', (e)=>{
    if(e.target.classList.contains('del')){
      if(!confirm('حذف القيد؟')) return;
      delete STORE.journals[e.target.dataset.id]; saveStore(STORE); renderJournal();
    }
  });
}

function renderLedger(){
  clearView();
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `<h3>دفتر الأستاذ</h3>
    <div class="form-row">
      <select id="ledgerAccountSelect" class="input"><option value="">اختر حساب (صندوق، مبيعات، مشتريات، موردين، عملاء...)</option></select>
      <button class="btn" id="showLedgerBtn">عرض</button>
    </div>
    <div id="ledgerResult"></div>
  `;
  viewArea.appendChild(card);
  const accSelect = card.querySelector('#ledgerAccountSelect');
  // populate accounts from known types
  const accounts = [
    {key:'cash', name:'الصندوق'},
    {key:'bank', name:'البنك'},
    {key:'sales', name:'المبيعات'},
    {key:'purchases', name:'المشتريات'},
    ...Object.values(STORE.suppliers).map(s=>({key:'supplier_'+s.id,name:'مورد: '+s.name})),
    ...Object.values(STORE.customers).map(c=>({key:'customer_'+c.id,name:'عميل: '+c.name}))
  ];
  accounts.forEach(a=> accSelect.appendChild(new Option(a.name,a.key)));
  card.querySelector('#showLedgerBtn').addEventListener('click', ()=>{
    const key = accSelect.value; if(!key) return alert('اختر حساب');
    const resDiv = card.querySelector('#ledgerResult'); resDiv.innerHTML = '';
    // simple ledger: show related invoices & journals
    const table = document.createElement('table'); table.className='table';
    table.innerHTML = `<thead><tr><th>ت</th><th>التاريخ</th><th>النوع</th><th>البيان</th><th>مدين</th><th>دائن</th></tr></thead><tbody></tbody>`;
    const tbody = table.querySelector('tbody');
    let rows = [];
    // invoices
    Object.values(STORE.invoices).forEach(inv=>{
      if(key === 'cash' || key === 'bank'){
        // cash/bank entries: if paymentMethod matches and cash involved
        if(inv.paymentMethod === 'cash' && key==='cash'){
          rows.push({date:inv.createdAt, type:inv.type, desc:'فاتورة '+inv.number, debit: inv.type.includes('sales')?inv.totals.grandTotal:0, credit: inv.type.includes('purchase')?inv.totals.grandTotal:0});
        }
        if(inv.paymentMethod === 'bank' && key==='bank'){
          rows.push({date:inv.createdAt, type:inv.type, desc:'فاتورة '+inv.number, debit: inv.type.includes('sales')?inv.totals.grandTotal:0, credit: inv.type.includes('purchase')?inv.totals.grandTotal:0});
        }
      }
      if(key.startsWith('supplier_') && inv.partyId && ('supplier_'+inv.partyId)===key){
        rows.push({date:inv.createdAt, type:inv.type, desc:'فاتورة '+inv.number, debit: inv.type.includes('purchase_return')?inv.totals.grandTotal:0, credit: inv.type.includes('purchase')?inv.totals.grandTotal:0});
      }
      if(key.startsWith('customer_') && inv.partyId && ('customer_'+inv.partyId)===key){
        rows.push({date:inv.createdAt, type:inv.type, desc:'فاتورة '+inv.number, debit: inv.type.includes('sales')?inv.totals.grandTotal:0, credit: inv.type.includes('sales_return')?inv.totals.grandTotal:0});
      }
    });
    // journals: include any lines mentioning the account text
    Object.values(STORE.journals).forEach(j=>{
      j.lines.forEach(l=>{
        if(l.account && l.account.includes(accounts.find(a=>a.key===key)?.name || '')) {
          rows.push({date:j.date, type:'قيد', desc:l.account, debit: l.side==='debit'?l.amount:0, credit: l.side==='credit'?l.amount:0});
        }
      });
    });
    rows.sort((a,b)=> new Date(a.date) - new Date(b.date));
    rows.forEach((r,idx)=>{
      const tr=document.createElement('tr');
      tr.innerHTML = `<td>${idx+1}</td><td>${formatDateTime(r.date)}</td><td>${r.type}</td><td style="text-align:left">${r.desc}</td><td>${money(r.debit||0)}</td><td>${money(r.credit||0)}</td>`;
      tbody.appendChild(tr);
    });
    resDiv.appendChild(table);
  });
}

function renderTrialBalanceAndTrade(){
  clearView();
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `<h3>قائمة المتاجرة والميزانية (تقرير مبسط)</h3>
    <div class="small-muted">يتم حساب مبالغ المبيعات والمشتريات والمرتجعات ومقارنة بضاعة أول وآخر المدة (القيم افتراضية من الفواتير).</div>
    <div id="tbtbl"></div>
  `;
  viewArea.appendChild(card);
  const container = card.querySelector('#tbtbl');
  // compute
  const totalPurchases = Object.values(STORE.invoices).filter(i=> i.type==='purchase').reduce((s,i)=>s+i.totals.grandTotal,0);
  const totalPurchaseReturns = Object.values(STORE.invoices).filter(i=> i.type==='purchase_return').reduce((s,i)=>s+i.totals.grandTotal,0);
  const totalSales = Object.values(STORE.invoices).filter(i=> i.type==='sales').reduce((s,i)=>s+i.totals.grandTotal,0);
  const totalSalesReturns = Object.values(STORE.invoices).filter(i=> i.type==='sales_return').reduce((s,i)=>s+i.totals.grandTotal,0);

  const goodsOpening = 0; const goodsClosing = 0; // placeholders
  const grossProfit = (totalSales - totalSalesReturns) - (totalPurchases - totalPurchaseReturns) + (goodsClosing - goodsOpening);

  container.innerHTML = `
    <table class="table"><thead><tr><th>بند</th><th>مبلغ</th></tr></thead>
      <tbody>
        <tr><td>بضاعة أول المدة</td><td>${money(goodsOpening)}</td></tr>
        <tr><td>مشتريات</td><td>${money(totalPurchases)}</td></tr>
        <tr><td>مردود مشتريات</td><td>${money(totalPurchaseReturns)}</td></tr>
        <tr><td>مبيعات</td><td>${money(totalSales)}</td></tr>
        <tr><td>مردود مبيعات</td><td>${money(totalSalesReturns)}</td></tr>
        <tr><td><strong>الربح الإجمالي/الخسارة</strong></td><td><strong>${money(grossProfit)}</strong></td></tr>
      </tbody>
    </table>
  `;
}

function renderPL(){
  clearView();
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `<h3>قائمة الأرباح والخسائر (مبسط)</h3>
    <div class="small-muted">تفصيل المصروفات والإيرادات من الفواتير والقيود (مبسط).</div>
    <div id="pltbl"></div>
  `;
  viewArea.appendChild(card);
  // For demo: revenues = sales - sales_returns; expenses = sum of journals with account containing 'مصاريف' (not available), fallback 0
  const revenues = Object.values(STORE.invoices).filter(i=> i.type==='sales').reduce((s,i)=>s+i.totals.grandTotal,0)
                   - Object.values(STORE.invoices).filter(i=> i.type==='sales_return').reduce((s,i)=>s+i.totals.grandTotal,0);
  const expenses = 0; // could be derived from journals using account names
  const net = revenues - expenses;
  card.querySelector('#pltbl').innerHTML = `<table class="table"><thead><tr><th>البند</th><th>المبلغ</th></tr></thead><tbody>
    <tr><td>إيرادات المبيعات</td><td>${money(revenues)}</td></tr>
    <tr><td>المصروفات</td><td>${money(expenses)}</td></tr>
    <tr><td><strong>صافي الربح/الخسارة</strong></td><td><strong>${money(net)}</strong></td></tr>
  </tbody></table>`;
}

function renderStatements(){
  clearView();
  const card = document.createElement('div'); card.className='card';
  card.innerHTML = `<h3>كشف الحساب (العملاء والموردين)</h3>
    <div class="form-row">
      <select id="stmtSelect" class="input"><option value="">اختر</option></select>
      <button class="btn" id="stmtShow">عرض الكشف</button>
    </div>
    <div id="stmtResult"></div>
  `;
  viewArea.appendChild(card);
  const sel = card.querySelector('#stmtSelect');
  Object.values(STORE.customers).forEach(c=> sel.appendChild(new Option('عميل: '+c.name, 'customer_'+c.id)));
  Object.values(STORE.suppliers).forEach(s=> sel.appendChild(new Option('مورد: '+s.name, 'supplier_'+s.id)));
  card.querySelector('#stmtShow').addEventListener('click', ()=>{
    const val = sel.value; if(!val) return alert('اختر حساب');
    const parts = val.split('_'); const type = parts[0]; const id = parts[1];
    const res = document.getElementById('stmtResult'); res.innerHTML = '';
    const tbl = document.createElement('table'); tbl.className='table';
    tbl.innerHTML = `<thead><tr><th>ت</th><th>التاريخ</th><th>النوع</th><th>رقم</th><th>مدين</th><th>دائن</th></tr></thead><tbody></tbody>`;
    const tbody = tbl.querySelector('tbody');
    const invs = Object.values(STORE.invoices).filter(i=> i.partyId===id);
    invs.sort((a,b)=> new Date(a.createdAt) - new Date(b.createdAt)).forEach((inv,idx)=>{
      const d
