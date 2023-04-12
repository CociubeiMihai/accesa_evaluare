package com.accesa.backend.entities;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.GenericGenerator;

import java.util.List;
import java.util.UUID;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class Quest {

    @Id
    @GeneratedValue(generator = "uuid2")
    @GenericGenerator(name = "uuid2", strategy = "uuid2")
    private UUID id;
    private String title;
    private String description;
    private int prize;
    private boolean isClosed;

    @OneToMany(fetch = FetchType.EAGER)
    private List<Answer> answers;
    @ManyToOne
    private AppUser author;
}
