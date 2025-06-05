package handlers

import (
	"net/http"
	"strconv"

	models "github.com/JAAE17/Proyecto-backend1/Interno/Modelo"
	"github.com/JAAE17/Proyecto-backend1/Interno/database"
	"github.com/gin-gonic/gin"
)

func GetAllMatches(c *gin.Context) {
	var matches []models.Match
	result := database.GetDB().Find(&matches)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}
	c.JSON(http.StatusOK, matches)
}

func GetMatchByID(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}
	var match models.Match
	result := database.GetDB().First(&match, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Partido no encontrado"})
		return
	}
	c.JSON(http.StatusOK, match)
}

func CreateMatch(c *gin.Context) {
	var newMatch models.Match

	// Deserializar el cuerpo de la solicitud
	if err := c.ShouldBindJSON(&newMatch); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Error en el formato JSON"})
		return
	}

	// Validaciones de campos
	if newMatch.HomeTeam == "" || newMatch.AwayTeam == "" {
		c.JSON(http.StatusBadRequest, gin.H{"error": "Los equipos son obligatorios"})
		return
	}

	// Crear el partido
	result := database.GetDB().Create(&newMatch)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	// Retornar el partido creado, incluyendo el ID
	c.JSON(http.StatusCreated, newMatch)
}

func UpdateMatch(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	var match models.Match
	result := database.GetDB().First(&match, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Partido no encontrado"})
		return
	}

	var updateData models.Match
	if err := c.ShouldBindJSON(&updateData); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	// Actualizar campos específicos
	match.HomeTeam = updateData.HomeTeam
	match.AwayTeam = updateData.AwayTeam
	match.MatchDate = updateData.MatchDate

	result = database.GetDB().Save(&match)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, match)
}

func DeleteMatch(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	result := database.GetDB().Delete(&models.Match{}, id)

	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	if result.RowsAffected == 0 {
		c.JSON(http.StatusNotFound, gin.H{"error": "Partido no encontrado"})
		return
	}

	c.JSON(http.StatusOK, gin.H{"message": "Partido eliminado exitosamente"})
}

func RegisterGoal(c *gin.Context) {
	updateMatchEvent(c, "goals")
}

func RegisterYellowCard(c *gin.Context) {
	updateMatchEvent(c, "yellow_cards")
}

func RegisterRedCard(c *gin.Context) {
	updateMatchEvent(c, "red_cards")
}

func SetExtraTime(c *gin.Context) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	var match models.Match

	result := database.GetDB().First(&match, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Partido no encontrado"})
		return
	}

	match.ExtraTime = true
	result = database.GetDB().Save(&match)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, match)
}

func updateMatchEvent(c *gin.Context, eventType string) {
	id, err := strconv.Atoi(c.Param("id"))
	if err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": "ID inválido"})
		return
	}

	var match models.Match

	result := database.GetDB().First(&match, id)
	if result.Error != nil {
		c.JSON(http.StatusNotFound, gin.H{"error": "Partido no encontrado"})
		return
	}

	switch eventType {
	case "goals":
		match.Goals++
	case "yellow_cards":
		match.YellowCards++
	case "red_cards":
		match.RedCards++
	}

	result = database.GetDB().Save(&match)
	if result.Error != nil {
		c.JSON(http.StatusInternalServerError, gin.H{"error": result.Error.Error()})
		return
	}

	c.JSON(http.StatusOK, match)
}
