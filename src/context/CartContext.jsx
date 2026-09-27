import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext(null);

function loadFromStorage(key) {
  const text = localStorage.getItem(key);
  if (!text) return [];
  try {
    return JSON.parse(text);
  } catch {
    return [];
  }
}

function loadCurrentUser() {
  const text = localStorage.getItem("currentUser");
  if (!text) return null;
  try {
    return JSON.parse(text);
  } catch {
    return null;
  }
}

export function CartProvider({ children }) {
  const [cart, setCart] = useState(() => loadFromStorage("cart"));
  const [orders, setOrders] = useState(() => loadFromStorage("orders"));
  const [users, setUsers] = useState(() => loadFromStorage("users"));
  const [currentUser, setCurrentUser] = useState(() => loadCurrentUser());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      localStorage.setItem("currentUser", JSON.stringify(currentUser));
    } else {
      localStorage.removeItem("currentUser");
    }
  }, [currentUser]);

  const addToCart = (name, price, unit, qty) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.name === name);
      if (existing) {
        return prev.map((item) =>
          item.name === name ? { ...item, qty: item.qty + qty } : item
        );
      }
      return [...prev, { name, price, unit, qty }];
    });
  };

  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((item) => item.name !== name));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const placeOrder = () => {
    if (cart.length === 0 || !currentUser) return false;
    const order = {
      id: "TB-" + Math.floor(100000 + Math.random() * 900000),
      date: new Date().toLocaleDateString(),
      items: cart,
      total: cartTotal,
      userEmail: currentUser.email,
    };
    setOrders((prev) => [order, ...prev]);
    setCart([]);
    return true;
  };

  const removeOrder = (id) => {
    setOrders((prev) => prev.filter((order) => order.id !== id));
  };

  const myOrders = currentUser
    ? orders.filter((o) => o.userEmail === currentUser.email)
    : [];

  const register = (name, email, password) => {
    const exists = users.some((u) => u.email === email);
    if (exists) return { success: false, message: "Email already registered." };
    const newUser = { name, email, password };
    setUsers((prev) => [...prev, newUser]);
    setCurrentUser(newUser);
    return { success: true };
  };

  const login = (email, password) => {
    const found = users.find((u) => u.email === email && u.password === password);
    if (!found) return { success: false, message: "Wrong email or password." };
    setCurrentUser(found);
    return { success: true };
  };

  const logout = () => {
    setCurrentUser(null);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        orders: myOrders,
        cartTotal,
        addToCart,
        removeFromCart,
        placeOrder,
        removeOrder,
        currentUser,
        register,
        login,
        logout,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}