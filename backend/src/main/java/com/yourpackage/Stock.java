package com.yourpackage;

import javax.persistence.*;

@Entity
@Table(name = "stocks")
public class Stock {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "stock_name", nullable = false)
    private String stockName;

    @Column(name = "ticker", nullable = false, unique = true)
    private String ticker;

    @Column(name = "quantity", nullable = false)
    private int quantity;

    @Column(name = "buy_price", nullable = false)
    private double buyPrice;

    // Getters and Setters
}