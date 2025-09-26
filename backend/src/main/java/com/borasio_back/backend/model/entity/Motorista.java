package com.borasio_back.backend.model.entity;

import jakarta.persistence.*;
import lombok.*;

@Entity
@Table(name = "motoristas", schema = "carona")
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Motorista {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "usuario_id", nullable = false)
    private Usuario usuario;

    @Column(length = 20)
    private String cnh;

    @Column(length = 100)
    private String veiculo;

    @Column(length = 50)
    private String marca;

    @Column(length = 50)
    private String modelo;

    @Column(length = 30)
    private String cor;

    @Column(name = "ar_condicionado")
    private Boolean arCondicionado;

    @Column(length = 20)
    private String combustivel;

    @Column
    private Integer assentos;

    // ----------------------------------------
    // Métodos auxiliares
    // ----------------------------------------
    public String getNome() {
        return usuario != null ? usuario.getNome() : null;
    }

    public String getEmail() {
        return usuario != null ? usuario.getEmail() : null;
    }
}
